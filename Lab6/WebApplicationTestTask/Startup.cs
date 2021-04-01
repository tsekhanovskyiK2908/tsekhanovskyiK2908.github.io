using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WebApplicationTestTask.Bl.Implementation;
using WebApplicationTestTask.Dal.Implementation;
using WebApplicationTestTask.Mappers.Implementation;
using Newtonsoft.Json.Converters;
using System.Reflection;
using System.IO;

namespace WebApplicationTestTask
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers()
                    .AddNewtonsoftJson();

            string connectionString = Configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<OrderingSystemDbContext>(options =>
                options.UseSqlServer(connectionString, builder => builder.MigrationsAssembly("WebApplicationTestTask.Dal.Implementation")));

            services.AddSwaggerGen(setupAction =>
            {
                setupAction.SwaggerDoc("WebPortalAPI",
                    new Microsoft.OpenApi.Models.OpenApiInfo
                    {
                        Title = "Web Portal API",
                        Version = "1"
                    });
                setupAction.UseOneOfForPolymorphism();
                var xmlCommentsFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlCommentsFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentsFile);

                setupAction.IncludeXmlComments(xmlCommentsFullPath);
            });

            services.AddSwaggerGenNewtonsoftSupport();

            DalDependencyInstaller.Install(services);
            MappersDependencyInstaller.Install(services);
            ServicesDependencyInstaller.Install(services);

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    policy.AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseSwagger();

            app.UseSwaggerUI(setupAction =>
            {
                setupAction.SwaggerEndpoint("/swagger/WebPortalAPI/swagger.json", "Web Portal API v1");
                setupAction.RoutePrefix = "";
            });

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
