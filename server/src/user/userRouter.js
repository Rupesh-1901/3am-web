import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  loginUser,
  updateUser,
} from "./userController.js";
import { validate } from "../middlewares/validationMiddleware.js";
import {
  createUserSchema,
  deleteUserSchema,
  getListSchema,
  loginUserSchema,
  updateUserSchema,
} from "./userValidation.js";
import authenticate from "../middlewares/authenticate.js";

const userRouter = express.Router();

// routes
userRouter.post("/register", validate(createUserSchema), createUser);
userRouter.post("/list", authenticate, validate(getListSchema), getAllUsers);
userRouter.post(
  "/delete",
  authenticate,
  validate(deleteUserSchema),
  deleteUser
);
userRouter.post(
  "/update",
  authenticate,
  validate(updateUserSchema),
  updateUser
);
userRouter.post("/login", validate(loginUserSchema), loginUser);

export default userRouter;
