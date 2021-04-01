﻿using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using WebApplicationTestTask.Entities;
using WebApplicationTestTask.Mappers.Abstraction;
using WebApplicationTestTask.Mappers.Abstraction.Base;
using WebApplicationTestTask.Models.OrderProduct;
using WebApplicationTestTask.Models.Product;

namespace WebApplicationTestTask.Mappers.Implementation
{
    public static class MappersDependencyInstaller
    {
        public static void Install(IServiceCollection services)
        {
            services.AddTransient<IProductMapper, ProductMapper>();
            services.AddTransient<IProductAltMapper, ProductAltMapper>();
            services.AddTransient<ICustomerMapper, CustomerMapper>();
            services.AddTransient<IOrderMapper, OrderMapper>();
            services.AddTransient<IMapFromModel<OrderProductModel, OrderProduct>, OrderProductMapper>();
        }
    }
}
