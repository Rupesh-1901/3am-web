import { z } from "zod";

export const listFilterSchema = z.object({
  dataTableRequest: z.object({
    pageStart: z.number().int().nonnegative().default(0),
    pageSize: z.number().int().positive().default(10),
    isExport: z.boolean().default(false),
    search: z.string().nullable().default(null),
    sortElement: z.string().default("id"),
    sortDirection: z.enum(["asc", "desc"]).default("desc"),
    filters: z.object().nullable().optional(),
  }),
});
