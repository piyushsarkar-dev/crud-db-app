import { z } from "zod";

export const createUserSchema = z.object({
  fullName: z
    .string()
    .min(6, { error: "Full Name must be at least 6 Characters" })
    .max(35, { error: "Full Name must be between 35 Characters" }),
  phone: z.string().length(13, { error: "" }).startsWith("+91", { error: "" }),
  email: z.email("Invalid email address"),
  gender: z.string().min(4, { error: "" }),
});

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
