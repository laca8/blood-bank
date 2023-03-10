const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ msg: "email is already exists" });
    }
    user = await new User({
      name,
      email,
      password,
    });
    await user.save();
    const token = await jwt.sign({ _id: user._id }, "laca", {
      expiresIn: "3d",
    });
    const docs = {
      name: user.name,
      email: user.email,
      _id: user._id,
      isAdmin: user.isAdmin,
    };
    return res.json({ user: docs, token });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    console.log(err);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: "invalid credintials" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ msg: "invalid credintials" });
    }
    const token = await jwt.sign({ _id: user._id }, "laca", {
      expiresIn: "3d",
    });
    const docs = {
      email: user.email,
      password: user.password,
      _id: user._id,
      isAdmin: user.isAdmin,
    };
    return res.json({ user: docs, token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
    console.log(err);
  }
};
module.exports = {
  register,
  login,
  getUsers,
};
