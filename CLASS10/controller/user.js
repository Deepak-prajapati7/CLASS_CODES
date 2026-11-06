const signin = async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if user exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare provided password with stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response with token
        res.status(200).json({ message: "Signin successful", token });
    } catch (error) {
        console.error("Error during signin:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  // Implementation for signin
};

const signup = async (req, res) => {
  // Implementation for signup
};

export { signin, signup };