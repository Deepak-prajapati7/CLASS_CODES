import User from "../model/user.js";
import bcrypt from "bcryptjs";
const signin = async (req, res) => {
    try {
        // Extract email and password from request body
        const { name, email, password, role } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(404).json({ message: "data not found" });
        }

        // Check if user exists in the database
        const user = await User.findOne({ email });
        if (user) {
            return res.status(403).json({ message: "user already exists try another email" ,
                success: false
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();

        // Respond with success message
        res.status(201  ).json({ message: "user created successfully", success: true });
    } catch (error) {
        console.error("Error during signin:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default signin;