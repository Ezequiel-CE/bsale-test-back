import { Router } from "express";
import {
  getCategories,
  getAllProductsByCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:categoryId", getAllProductsByCategory);

export default categoryRouter;
