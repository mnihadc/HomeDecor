const User = require("../model/User");

const getProfile = async (req, res, next) => {
  const user = req.session.user;
  if (!user) {
    return res.status(401).json({ message: "User is not logged in." });
  }

  try {
    const userData = await User.findOne({ email: user.email });
    if (!userData) {
      return res.status(404).json({ message: "User not found." });
    }

    res.render("users/Profile", {
      title: "Profile Page",
      isProfilePage: true,
      email: userData.email,
      user: req.session.user,
      username: userData.username,
      password: userData.password,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
module.exports = { getProfile };
