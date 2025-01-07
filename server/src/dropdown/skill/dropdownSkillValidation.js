import { z } from "zod";

// Schema for creating a Skill
export const createSkillSchema = z.object({
  name: z.string().min(1, { message: "Skill name is required." }),
  jobTitleId: z.string(),
});

// Schema for updating a Skill (all fields optional)
export const updateSkillSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: "Skill name cannot be empty." })
    .optional(),
  jobTitleId: z.string(),
});
