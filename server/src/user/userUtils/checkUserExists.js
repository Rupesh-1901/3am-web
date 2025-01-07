import prisma from "../../config/dbConfig.js";

export const checkUserExists = async (model, email) => {
  return await prisma[model].findUnique({
    where: { email },
  });
};
