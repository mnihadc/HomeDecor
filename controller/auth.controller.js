const User = require("../model/User");
const bcrypt = require("bcrypt");

const getLoginPage = (req, res, next) => {
  res.render("users/Login", {
    title: "Login Page",
    isLoginPage: true,
  });
};

const SignUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (username.length < 5) {
      return res
        .status(400)
        .json({ message: "Username should be at least 5 characters long" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password should be at least 8 characters long" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = { getLoginPage, SignUp };
