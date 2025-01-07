import { z } from "zod";
import { listFilterSchema } from "../globalValidation/listFilterValidationSchema.js";

// Schema for creating a User
export const createUserSchema = z.object({
  role: z.enum(["employer", "candidate", "admin"]),
  fullName: z.string().min(1, { message: "Full name is required." }),
  userName: z.string().min(1, { message: "Username is required." }),
  email: z.string().email({ message: "Invalid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export const getListSchema = z
  .object({
    role: z.enum(["employer", "candidate", "admin"]),
  })
  .merge(listFilterSchema);
export const loginUserSchema = z.object({
  role: z.enum(["employer", "candidate", "admin"]),
  email: z.string().email({ message: "Invalid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});
// Schema for deleting a User
export const deleteUserSchema = z.object({
  role: z.enum(["employer", "candidate", "admin"]),
  id: z.string(),
});

// Schema for updating a User
export const updateUserSchema = z.object({
  role: z.enum(["employer", "candidate", "admin"]),
  id: z.string(),
  data: z
    .object({
      fullName: z
        .string()
        .min(1, { message: "Full name must be at least 1 character long." })
        .optional(),
      userName: z
        .string()
        .min(1, { message: "Username must be at least 1 character long." })
        .optional(),
      email: z.string().email({ message: "Invalid email format." }).optional(),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .optional(),
      role: z.enum(["employer", "candidate", "admin"]).optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: "At least one field must be provided for update.",
    }),
});
