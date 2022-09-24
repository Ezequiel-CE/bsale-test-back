import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ succes: true, categories });
  } catch (error) {
    res.status(400).json({ succes: false, message: "something gone wrong" });
  }
};

export const getAllProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const categoryProducts = await Product.findAll({
      where: { category: categoryId },
    });
    res.status(200).json({ succes: true, products: categoryProducts });
  } catch (error) {
    res.status(400).json({ succes: false, message: "something gone wrong" });
  }
};
