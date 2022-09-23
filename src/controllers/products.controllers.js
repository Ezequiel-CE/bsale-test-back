import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ succes: true, products });
  } catch (error) {
    res.status(200).json({ succes: false, message: "something gone wrong" });
  }
};
export const searchProducts = (req, res) => {
  res.send("get a specific product endpoint");
};
