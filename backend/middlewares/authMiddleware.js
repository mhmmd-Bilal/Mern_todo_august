import Users from "../model/userModel.js";
import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  const token = req.cookies?.jwt;

  console.log("Cookies:", req.cookies);
  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, "fgdsjgsdyjfusa");

    const user = await Users.findById(decoded.userId)
      .select("-password");

    req.user = user;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export { protect };