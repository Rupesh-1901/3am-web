import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
	log: ["info", "query"],
});
export default prisma;
