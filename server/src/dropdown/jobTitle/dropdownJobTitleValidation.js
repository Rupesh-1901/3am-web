import { z } from "zod";

// Schema for creating a JobTitle
export const createJobTitleSchema = z.object({
  name: z.string().min(1, { message: "Job Title name is required." }),
  categoryId: z.string(),
});

// Schema for updating a JobTitle (all fields optional)
export const updateJobTitleSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: "Job Title name cannot be empty." })
    .optional(),
  categoryId: z.string().optional(),
});
