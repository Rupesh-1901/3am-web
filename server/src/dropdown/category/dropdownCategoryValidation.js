import { z } from "zod";

// Schema for creating a Category
export const createCategorySchema = z.object({
  name: z.string().min(1, { message: "Category name is required." }),
  sectorId: z.string(),
});

// Schema for updating a Category (all fields optional)
export const updateCategorySchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: "Category name cannot be empty." })
    .optional(),
  sectorId: z.string().optional(),
});
