using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplicationTestTask.Bl.Abstraction.Services;
using WebApplicationTestTask.Dal.Abstraction;
using WebApplicationTestTask.Entities;
using WebApplicationTestTask.Mappers.Abstraction;
using WebApplicationTestTask.Models.Product;
using WebApplicationTestTask.Models.Response;

namespace WebApplicationTestTask.Bl.Implementation.Services
{
    public class ProductAltService : IProductAltService
    {
        private readonly IProductRepository _productRepository;
        private readonly IProductAltMapper _productMapper;
        private readonly IOrderProductRepository _orderProductRepository;
        public ProductAltService(IProductRepository productRepository,
            IProductAltMapper productMapper,
            IOrderProductRepository orderProductRepository)
        {
            _productRepository = productRepository;
            _productMapper = productMapper;
            _orderProductRepository = orderProductRepository;
        }

        public async Task<ProductModel> CreateProductAsync(ProductModel productModel)
        {
            Product productToCreate = _productMapper.MapBackToEntity(productModel);
            productToCreate.CreationDate = DateTime.UtcNow;

            Product addedProduct = await _productRepository.AddAsync(productToCreate);
            await _productRepository.SaveAsync();

            return _productMapper.MapToModel(addedProduct);
        }

        public async Task<DataResult<ProductModel>> DeleteProductAsync(int productId)
        {
            Product productToDelete = await _productRepository.GetByIdAsync(productId);

            if (productToDelete == null)
            {
                return null;
            }

            List<OrderProduct> orderProducts = await _orderProductRepository.GetOrderProductsOfProduct(productId);

            if (orderProducts.Any())
            {
                return new DataResult<ProductModel>
                {
                    ResponseMessageType = ResponseMessageType.Error,
                    MessageDetails = "Product is used in some orders"
                };
            }

            Product deletedProduct = await _productRepository.DeleteAsync(productToDelete);
            await _productRepository.SaveAsync();

            return new DataResult<ProductModel>
            {
                ResponseMessageType = ResponseMessageType.Success,
                Data = _productMapper.MapToModel(deletedProduct)
            };
        }

        public async Task<List<ProductModel>> GetAllProductsAsync()
        {
            List<Product> products = await _productRepository.GetAllAsync();

            List<ProductModel> productModels = products.Select(_productMapper.MapToModel).ToList();

            return productModels;
        }

        public async Task<ProductModel> GetProductById(int productId)
        {
            Product product = await _productRepository.GetByIdAsync(productId);

            if (product == null)
            {
                return null;
            }

            ProductModel productModel = _productMapper.MapToModel(product);

            return productModel;
        }

        public async Task<ProductModel> UpdateProductAsync(ProductModel productModel)
        {
            Product productToUpdate = await _productRepository.GetByIdAsync(productModel.Id);

            if (productToUpdate == null)
            {
                return null;
            }

            productToUpdate = _productMapper.MapBack(productModel, productToUpdate);

            _productRepository.Update(productToUpdate);
            await _productRepository.SaveAsync();

            return _productMapper.MapToModel(productToUpdate);
        }
    }
}
