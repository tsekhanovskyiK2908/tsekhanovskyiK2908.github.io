using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplicationTestTask.Bl.Abstraction.Services;
using WebApplicationTestTask.Models.Product;
using WebApplicationTestTask.Models.Response;

namespace WebApplicationTestTask.Controllers
{
    [Route("api/alt/products")]
    [ApiController]
    public class ProductsAltApiController : ControllerBase
    {
        private readonly IProductAltService _productService;
        private readonly IValidator<ProductModel> _productModelValidator;

        public ProductsAltApiController(IProductAltService productAltService,
            IValidator<ProductModel> productModelValidator)
        {
            _productService = productAltService;
            _productModelValidator = productModelValidator;
        }

        [HttpGet("")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _productService.GetAllProductsAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute]int id)
        {
            ProductModel productModel = await _productService.GetProductById(id);

            if (productModel == null)
            {
                return NotFound();
            }

            return Ok(productModel);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ProductModel productModel)
        {
            ValidationResult validationResult = _productModelValidator.Validate(productModel);

            if (!validationResult.IsValid)
            {    
                return BadRequest();
            }

            return Ok(await _productService.CreateProductAsync(productModel));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] ProductModel productModel)
        {
            if (id != productModel.Id)
            {
                return BadRequest();
            }

            ValidationResult validationResult = _productModelValidator.Validate(productModel);

            if (!validationResult.IsValid)
            {
                return BadRequest();
            }

            ProductModel updatedProduct = await _productService.UpdateProductAsync(productModel);

            if(updatedProduct == null)
            {
                return NotFound();
            }

            return Ok(updatedProduct);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            DataResult<ProductModel> result = await _productService.DeleteProductAsync(id);

            if (result.ResponseMessageType == ResponseMessageType.Error)
            {
                return NotFound(result);
            }

            return Ok(result.Data);
        }
    }
}