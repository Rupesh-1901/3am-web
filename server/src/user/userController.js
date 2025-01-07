import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { config } from "../config/config.js";
import prisma from "../config/dbConfig.js";
import generateToken from "./userUtils/generateToken.js";
import { dataTableRequestObject } from "../utils/dataTableRequestObject.js";
import { getModelConfig } from "./userUtils/getModelConfig.js";
import { checkUserExists } from "./userUtils/checkUserExists.js";
import { createNewUser } from "./userUtils/createNewUser.js";

//create user
const createUser = async (req, res, next) => {
  const { role, email, password, userName, fullName } = req.validatedBody;

  const model = getModelConfig(role);
  try {
    const existingUser = await checkUserExists(model, email);
    if (existingUser) {
      const error = createHttpError(
        400,
        "It looks like you might already have an account. Please log in or use the password reset option if you've forgotten your credentials."
      );
      return next(error);
    }
  } catch {
    return next(createHttpError(500, "Internal server error."));
  }
  let newUser;
  try {
    newUser = await createNewUser(model, {
      role,
      email,
      password,
      userName,
      fullName,
    });
  } catch {
    return next(createHttpError(500, "Error while creating user."));
  }
  console.log("object newUser", newUser);
  const subObj = { role: newUser.role, id: newUser.id };
  try {
    // Token generation JWT
    const token = generateToken(subObj, config.jwtSecret);
    // Response
    res.status(201).json({ accessToken: token });
  } catch {
    return next(createHttpError(500, "Error while signing the jwt token"));
  }
};
// get all users
const getAllUsers = async (req, res, next) => {
  const { role, dataTableRequest } = req.validatedBody;
  const filterObj = dataTableRequestObject(dataTableRequest);
  const model = getModelConfig(role);
  try {
    const users = await prisma[model].findMany({
      where: filterObj.where,
      orderBy: filterObj.orderBy,
      skip: filterObj.skip,
      take: filterObj.take,
      select: {
        id: true,
        role: true,
        email: true,
        userName: true,
        fullName: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const serializedUser = {
      ...users.map((it) => {
        return { ...it, id: it.id.toString() };
      }),
    };
    res.status(200).json(serializedUser);
  } catch (error) {
    console.error("Error fetching users:", error);
    return next(createHttpError(500, "Internal server error."));
  }
};

// // Get Single User by ID
// const getSingleUser = async (req, res, next) => {
//   const { id,role } = req.validatedBody;

//   const model = getModelConfig(role);

//   try {
//     const user = await prisma[model].findUnique({
//       where: {
//         id: id,
//       },
//       select: {
//         id: true,
//         role: true,
//         email: true,
//         userName: true,
//         fullName: true,
//         createdAt: true,
//         updatedAt: true,
//       },
//     });

//     if (!user || user.isDeleted) {
//       return next(createHttpError(404, "User not found."));
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     console.error("Error fetching single user:", error);
//     return next(createHttpError(500, "Internal server error."));
//   }
// };

// Delete User (Soft Delete)
const deleteUser = async (req, res, next) => {
  const { role, id } = req.validatedBody;

  const model = getModelConfig(role);

  try {
    const user = await prisma[model].findUnique({
      where: { isDeleted: false, id: id },
    });

    if (!user) {
      return next(createHttpError(404, "User not found."));
    }

    await prisma[model].update({
      where: { id: id },
      data: { isDeleted: true, isActive: false },
    });

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    return next(createHttpError(500, "Internal server error."));
  }
};

// Update User
const updateUser = async (req, res, next) => {
  const { id, data, role } = req.validatedBody;

  const model = getModelConfig(role);

  // If password is being updated, hash it
  if (data.password) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);
      data.password = hashedPassword;
    } catch (error) {
      console.error("Error hashing password:", error);
      return next(createHttpError(500, "Error processing password."));
    }
  }

  try {
    const user = await prisma[model].findUnique({
      where: { isDeleted: false, id: id },
    });

    if (!user) {
      return next(createHttpError(404, "User not found."));
    }

    const updatedUser = await prisma[model].update({
      where: { isDeleted: false, id: BigInt(id) },
      data,
      select: {
        id: true,
        role: true,
        email: true,
        userName: true,
        fullName: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const serializedUser = {
      ...updatedUser,
      id: updatedUser.id.toString(),
    };
    res.status(200).json(serializedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return next(createHttpError(500, "Internal server error."));
  }
};

const loginUser = async (req, res, next) => {
  const { role, email, password } = req.validatedBody;
  const model = getModelConfig(role);
  try {
    const existingUser = await checkUserExists(model, email);
    if (!existingUser) {
      return next(createHttpError(404, "User not found."));
    }
    if (existingUser.role !== role) {
      return next(
        createHttpError(
          400,
          "Login failed. Please check your credentials and try again."
        )
      );
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return next(
        createHttpError(
          400,
          "Login failed. Please check your credentials and try again."
        )
      );
    }
    const subObj = { role: existingUser.role, id: existingUser.id };
    const token = generateToken(subObj, config.jwtSecret);
    res.json({ accessToken: token });
  } catch {
    return next(createHttpError(500, "Error while autheticating user"));
  }
};

export { createUser, loginUser, getAllUsers, updateUser, deleteUser };
