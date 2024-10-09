import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import prisma from "../config/dbConfig.js";

const createUser = async (req, res, next) => {
  const { loginType, email, password, userName, fullName } = req.body;

  // Validation
  if (!loginType || !fullName || !userName || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error); //for only async
  }

  // Database call.
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
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
    newUser = await prisma.user.create({
      data: {
        loginType: loginType,
        fullName: fullName,
        userName: userName,
        email: email,
        password: hashedPassword,
      },
    });
  } catch {
    return next(createHttpError(500, "Error while creating user."));
  }

  try {
    // Token generation JWT
    const token = jwt?.sign({ sub: newUser._id }, config.jwtSecret, {
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
  const { loginType, email, password } = req.body;

  if (!loginType || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      return next(createHttpError(404, "User not found."));
    }
    if (user.loginType !== loginType) {
      return next(createHttpError(400, "Incorrect login type."));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(createHttpError(400, "Username or password incorrect!"));
    }
    // Create accesstoken
    const token = jwt?.sign({ sub: user._id }, config.jwtSecret, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    res.json({ accessToken: token });
  } catch {
    return next(createHttpError(500, "Error while autheticating user"));
  }
};

export { createUser, loginUser };
