const User = require("../model/User");
const { success, error } = require("../utils/responseWrapper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signupController = async (req, res) => {
  const { name, password, email, blood_group, phone_no, city, age } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    !blood_group ||
    !city ||
    !age ||
    !phone_no
  )
    return res.send(error(400, "all fields are required"));
  const user = await User.findOne({ email });
  if (user) return res.send(error(400, "user already registered"));
  const hashPass = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({
      name,
      password: hashPass,
      email,
      phone_no,
      city,
      age,
      blood_group,
    });
    return res.send(success(200, { newUser }));
  } catch (err) {
    console.log(err);
    return res.send(error(500, err.message));
  }
};
const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.send(error(400, "email and password required"));
  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.send(error(404, "user not found"));
  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) return res.send(error(409, "Invalid password"));
  //get the access Token
  const accessToken = generateAccessToken({ _id: user._id });
  return res.send(
    success(200, {
      user,
      accessToken,
    })
  );
};
//internal functions
function generateAccessToken(payload) {
  const ACCESS_SEC_KEY = process.env.ACCESS_SEC_KEY;
  return jwt.sign(payload, ACCESS_SEC_KEY, {
    expiresIn: "1d",
  });
}
module.exports = { loginController, signupController };
