import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import userModel from "./userModel";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req, res, next) => {
  const { loginType, email, password } = req.body;

  // Validation
  if (!loginType || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error); //for only async
  }

  // Database call.
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const error = createHttpError(
        400,
        "User already exists with this email."
      );
      return next(error);
    }
  } catch {
    return next(createHttpError(500, "Error while getting user"));
  }

  // password -> hash
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser;
  try {
    newUser = await userModel.create({
      loginType,
      email,
      password: hashedPassword,
    });
  } catch {
    return next(createHttpError(500, "Error while creating user."));
  }

  try {
    // Token generation JWT
    const token = sign({ sub: newUser._id }, config.jwtSecret, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    // Response
    res.status(201).json({ accessToken: token });
  } catch {
    return next(createHttpError(500, "Error while signing the jwt token"));
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(createHttpError(404, "User not found."));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(createHttpError(400, "Username or password incorrect!"));
    }
    // Create accesstoken
    const token = sign({ sub: user._id }, config.jwtSecret, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    res.json({ accessToken: token });
  } catch {
    return next(createHttpError(500, "Error while autheticating user"));
  }
};

export { createUser, loginUser };
