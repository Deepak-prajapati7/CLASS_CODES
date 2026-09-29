import express from "express";

const app = express();// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/user", (req, res) => {
  try {
    console.log("this is main logic");
    res.status(200).json({
      message: "User data retrieved successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
