import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDb from "./database/db.js";

dotenv.config();

const app = express();
const PORT = process.env.NODE_PORT || 4001;

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  connectDb();
  console.log(`SERVER HAS BEEN STARTED AT PORT ${PORT}`);
});
