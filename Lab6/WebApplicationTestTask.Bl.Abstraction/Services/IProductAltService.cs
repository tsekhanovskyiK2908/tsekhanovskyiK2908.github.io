using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebApplicationTestTask.Models.Product;
using WebApplicationTestTask.Models.Response;

namespace WebApplicationTestTask.Bl.Abstraction.Services
{
    public interface IProductAltService
    {
        Task<List<ProductModel>> GetAllProductsAsync();
        Task<ProductModel> CreateProductAsync(ProductModel productModel);
        Task<ProductModel> UpdateProductAsync(ProductModel productModel);
        Task<DataResult<ProductModel>> DeleteProductAsync(int productId);
        Task<ProductModel> GetProductById(int productId);
    }
}
