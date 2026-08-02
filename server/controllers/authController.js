const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const exisitingUser = await User.findOne({ email });

    if (exisitingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);

    console.log(hashedpassword);

    const newUser = {
      name,
      email,
      password: hashedpassword,
      role,
    };

    const user = await User.create(newUser);
    return res.status(201).json({ message: "User Registered", user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser };
