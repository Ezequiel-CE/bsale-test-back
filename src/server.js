import express from "express";
import "dotenv/config";
import db from "./cfg/database.js";
import cors from "cors";

const app = express();

//middleware

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  try {
    await db.authenticate();

    console.log("Connection has been established successfully.");

    console.log("listen on port " + port);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
