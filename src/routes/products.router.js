import { Router } from "express";
import {
  getAllProducts,
  searchProducts,
} from "../controllers/products.controllers.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/search", searchProducts);

export default productRouter;
