import bcrypt from "bcrypt";
import prisma from "../../config/dbConfig.js";

export const createNewUser = async (model, userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = await prisma[model].create({
    data: {
      role: userData.role,
      fullName: userData.fullName,
      userName: userData.userName,
      email: userData.email,
      password: hashedPassword,
      isActive: true,
      isDeleted: false,
    },
  });

  return newUser;
};
