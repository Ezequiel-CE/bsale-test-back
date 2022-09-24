import Product from "../models/product.model.js";
import { Op } from "sequelize";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ succes: true, products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ succes: false, message: "something gone wrong" });
  }
};
export const searchProducts = async (req, res) => {
  const { productName } = req.query;

  try {
    const searchProduct = await Product.findAll({
      where: { name: { [Op.like]: `%${productName}%` } },
    });

    res.status(200).json({ succes: true, products: searchProduct });
  } catch (error) {
    res.status(400).json({ succes: false, message: "something gone wrong" });
  }
};
