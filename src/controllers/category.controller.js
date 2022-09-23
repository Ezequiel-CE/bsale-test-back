import Category from "../models/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ succes: true, categories });
  } catch (error) {
    res.status(400).json({ succes: false, message: "something gone wrong" });
  }
};
