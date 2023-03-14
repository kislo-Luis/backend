import { Product } from "../models/Product.js";

export const getProduct = async (req, res) => {
  const Products = await Product.findAll();

  res.json(Products);
};

export const createProduct = async (req, res) => {
  const { Name, Price, Stock, Image } = req.body;

  const newProduct = await Product.create({
    Name,
    Price,
    Stock,
    Image,
  });

  res.json(newProduct);
};
