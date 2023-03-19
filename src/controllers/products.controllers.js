import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const Products = await Product.findAll();

    res.json(Products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getproduct = async (req, res) => {
  try {
    const {id}= req.params
    const product = await Product.findOne({
      where: {
       id,
      },
    });
    
    res.send(product);
    
  } catch (error) {
    
    return res.status(500).json ({ message: error.message});
  }
  
}

export const createProduct = async (req, res) => {
  const { Name,Description, Price, Stock, Image } = req.body;

  try {
    const newProduct = await Product.create({
      Name,
      Description,
      Price,
      Stock,
      Image,
    });
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Description, Price, Stock } = req.body;

    const product = await Product.findByPk(id);
    product.Name = Name;
    product.Description = Description;
    product.Price = Price;
    product.Stock = Stock;

    // o tambien podriamos probar hacer product.set(req.body )
    await product.save();

    res.send(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

