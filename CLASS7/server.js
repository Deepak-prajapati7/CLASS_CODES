import express from "express";

const app = express();

app.use(express.json());

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my Express API",
    success: true,
  });
});

// Get all users
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Aman", age: 25 },
    { id: 3, name: "Priya", age: 21 },
  ];

  res.status(200).json({
    success: true,
    users,
  });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const users = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Aman", age: 25 },
    { id: 3, name: "Priya", age: 21 },
  ];

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Create user
app.post("/users", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      success: false,
      message: "Name and age are required",
    });
  }

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
      id: 4,
      name,
      age,
    },
  });
});

// 404 route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});