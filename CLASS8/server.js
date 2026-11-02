
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/class8db")
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Model
const Student = mongoose.model("Student", studentSchema);

// Home route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Insert student
app.post("/add", async (req, res) => {
    const data = await Student.create(req.body);
    res.send(data);
});

// Get all students
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.send(data);
});

// Update student
app.put("/update/:id", async (req, res) => {
    const data = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.send(data);
});

// Delete student
app.delete("/delete/:id", async (req, res) => {
    const data = await Student.findByIdAndDelete(req.params.id);
    res.send(data);
});

// Start server after database connection
mongoose.connection.once("open", () => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
});
