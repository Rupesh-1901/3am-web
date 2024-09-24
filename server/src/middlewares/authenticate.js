import createHttpError from "http-errors";
import { verify } from "jsonwebtoken";
import { config } from "../config/config";

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return next(createHttpError(401, "Authorization token is required."));
  }

  try {
    const parsedToken = token.split(" ")[1];
    const decoded = verify(parsedToken, config.jwtSecret);
    const _req = req;
    _req.userId = decoded.sub;

    next();
  } catch {
    return next(createHttpError(401, "Token expired."));
  }
};

export default authenticate;
