using System;
using System.Collections.Generic;
using System.Text;
using WebApplicationTestTask.Entities;
using WebApplicationTestTask.Mappers.Abstraction.Base;
using WebApplicationTestTask.Models.Product;

namespace WebApplicationTestTask.Mappers.Abstraction
{
    public interface IProductAltMapper : IMapToModel<Product, ProductModel>, IMapFromModel<ProductModel, Product>,
        IMapForUpdate<ProductModel, Product>
    {

    }
}
