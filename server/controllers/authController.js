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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Fill all the fields" });
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not Found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Email or Password" });
      }
      const token = jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        },
      );
      return res.status(200).json({ message: "Login Successfull", token });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { registerUser };
