import { z } from "zod";

// Schema for creating a Sector
export const createSectorSchema = z.object({
  name: z.string().min(1, { message: "Sector name is required." }),
});

// Schema for updating a Sector (all fields optional)
export const updateSectorSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: "Sector name cannot be empty." })
    .optional(),
});
