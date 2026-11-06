import express from "express";
import connectDB from "./database/mongodb.js";
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
connectDB();