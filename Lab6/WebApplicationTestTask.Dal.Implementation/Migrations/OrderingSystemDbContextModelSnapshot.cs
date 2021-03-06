﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplicationTestTask.Dal.Implementation;

namespace WebApplicationTestTask.Dal.Implementation.Migrations
{
    [DbContext(typeof(OrderingSystemDbContext))]
    partial class OrderingSystemDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("WebApplicationTestTask.Entities.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(75)
                        .HasColumnType("nvarchar(75)");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Customers");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "34, Hryhorenka avenue, Kyiv",
                            CreatedDate = new DateTime(2021, 3, 2, 16, 10, 0, 0, DateTimeKind.Unspecified),
                            Name = "Danylo Kozak"
                        },
                        new
                        {
                            Id = 2,
                            Address = "16, Polyarna street, Kyiv",
                            CreatedDate = new DateTime(2021, 3, 2, 19, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Maryna Hetman"
                        },
                        new
                        {
                            Id = 3,
                            Address = "120, Peremohy avenue, Kyiv",
                            CreatedDate = new DateTime(2021, 3, 2, 19, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Denys Ivahnenko"
                        });
                });

            modelBuilder.Entity("WebApplicationTestTask.Entities.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("OrderStatus")
                        .HasColumnType("int");

                    b.Property<decimal>("TotalCost")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.ToTable("Orders");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Comment = "Delivery to the door",
                            CustomerId = 1,
                            OrderDate = new DateTime(2021, 2, 3, 10, 30, 25, 0, DateTimeKind.Unspecified),
                            OrderStatus = 4,
                            TotalCost = 500m
                        },
                        new
                        {
                            Id = 2,
                            Comment = "Delivery to the office",
                            CustomerId = 2,
                            OrderDate = new DateTime(2021, 2, 28, 14, 30, 59, 0, DateTimeKind.Unspecified),
                            OrderStatus = 2,
                            TotalCost = 350m
                        },
                        new
                        {
                            Id = 3,
                            Comment = "Call before arriving",
                            CustomerId = 3,
                            OrderDate = new DateTime(2021, 3, 1, 8, 59, 50, 0, DateTimeKind.Unspecified),
                            OrderStatus = 1,
                            TotalCost = 210m
                        });
                });

            modelBuilder.Entity("WebApplicationTestTask.Entities.OrderProduct", b =>
                {
                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<decimal>("Price")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("ProductSize")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("OrderId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderProducts");

                    b.HasData(
                        new
                        {
                            OrderId = 1,
                            ProductId = 1,
                            Price = 100m,
                            ProductSize = 0,
                            Quantity = 5
                        },
                        new
                        {
                            OrderId = 1,
                            ProductId = 2,
                            Price = 400m,
                            ProductSize = 0,
                            Quantity = 2
                        },
                        new
                        {
                            OrderId = 2,
                            ProductId = 2,
                            Price = 200m,
                            ProductSize = 0,
                            Quantity = 1
                        },
                        new
                        {
                            OrderId = 2,
                            ProductId = 3,
                            Price = 150m,
                            ProductSize = 0,
                            Quantity = 1
                        },
                        new
                        {
                            OrderId = 3,
                            ProductId = 1,
                            Price = 60m,
                            ProductSize = 0,
                            Quantity = 3
                        },
                        new
                        {
                            OrderId = 3,
                            ProductId = 3,
                            Price = 150m,
                            ProductSize = 0,
                            Quantity = 1
                        });
                });

            modelBuilder.Entity("WebApplicationTestTask.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("AvaliableQuantity")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<decimal>("Price")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("ProductCategory")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AvaliableQuantity = 10,
                            CreationDate = new DateTime(2021, 2, 20, 15, 10, 0, 0, DateTimeKind.Unspecified),
                            Description = "Delicious",
                            Name = "Avocado",
                            Price = 20m,
                            ProductCategory = 1
                        },
                        new
                        {
                            Id = 2,
                            AvaliableQuantity = 30,
                            CreationDate = new DateTime(2021, 2, 20, 15, 10, 0, 0, DateTimeKind.Unspecified),
                            Description = "Really Delicious",
                            Name = "Steak",
                            Price = 200m,
                            ProductCategory = 1
                        },
                        new
                        {
                            Id = 3,
                            AvaliableQuantity = 5,
                            CreationDate = new DateTime(2021, 2, 20, 15, 10, 0, 0, DateTimeKind.Unspecified),
                            Description = "Looks good",
                            Name = "T-shirt",
                            Price = 150m,
                            ProductCategory = 2
                        });
                });

            modelBuilder.Entity("WebApplicationTestTask.Entities.Order", b =>
                {
                    b.HasOne("WebApplicationTestTask.Entities.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("WebApplicationTestTask.Entities.OrderProduct", b =>
                {
                    b.HasOne("WebApplicationTestTask.Entities.Order", "Order")
                        .WithMany("OrderProducts")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApplicationTestTask.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("WebApplicationTestTask.Entities.Order", b =>
                {
                    b.Navigation("OrderProducts");
                });
#pragma warning restore 612, 618
        }
    }
}
