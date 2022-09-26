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
  const { sort, order } = req.query;

  try {
    if (sort && order) {
      const sortedCategoryProducts = await Product.findAll({
        where: { category: categoryId },
        order: [[sort, order]],
      });

      return res
        .status(200)
        .json({ succes: true, products: sortedCategoryProducts });
    }

    const unsortedCategoryProducts = await Product.findAll({
      where: { category: categoryId },
    });

    res.status(200).json({ succes: true, products: unsortedCategoryProducts });
  } catch (error) {
    console.log(error);
    res.status(400).json({ succes: false, message: "something gone wrong" });
  }
};
