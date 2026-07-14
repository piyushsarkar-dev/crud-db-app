import { z } from "zod";

export const CreateUserSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 Characters")
    .max(35, { error: " must be between 35 Characters" }),
  phone: z
    .string()
    .regex(/^\+91\s\d{10}$/, "Phone number must be in format: +91 87770XXXXX"),
  email: z.email("Invalid email address"),
  gender: z.enum(["male", "female", "other"], {
    message: "Please Select a Gender",
  }),
});

export type createUserSchemaType = z.infer<typeof CreateUserSchema>;
