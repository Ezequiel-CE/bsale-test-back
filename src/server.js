import express from "express";
import "dotenv/config";
import db from "./cfg/database.js";
import cors from "cors";
import morgan from "morgan";
import productRouter from "./routes/products.router.js";
import categoryRouter from "./routes/category.router.js";
import Category from "./models/category.model.js";
import Product from "./models/product.model.js";

const app = express();

//middleware

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//routes
app.use("/api/products", productRouter);
app.use("/api/category", categoryRouter);

app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist",
  });
});

const port = process.env.PORT || 4000;
app.listen(port, async () => {
  try {
    await db.authenticate();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
