import createHttpError from "http-errors";
import { config } from "../config/config.js";
import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return next(createHttpError(401, "Authorization token is required."));
  }

  try {
    const parsedToken = token.split(" ")[1];
    const decoded = jwt.verify(parsedToken, config.jwtSecret);
    req.user = {
      id: BigInt(decoded.id),
      role: decoded.role,
    };
    console.log("object req.user", req.user);
    next();
  } catch {
    return next(createHttpError(401, "Token expired."));
  }
};

export default authenticate;
