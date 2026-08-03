import z from "zod";

export const registerFormSchema = z.object({
  fullName: z
    .string()
    .min(6, { error: "Full Name must be at least 6 Characters" })
    .max(35, { error: "Full Name must be no more than 35 Characters" }),
  email: z
    .email("Invalid Email Address")
    .max(64, { error: "The Value Must Be Under 64 Characters" }),
  phone: z
    .string()
    .regex(/^\+91\d{10}$/, { error: "Follow The Format : +918777XXXXXX" }),
  gender: z.string().min(1, { error: "Please Select A Gender" }),
});

export type RegisterSchematype = z.infer<typeof registerFormSchema>;
