import { z } from "zod";


export const applySchema = z.object({
  // Personal Info
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name contains invalid characters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name contains invalid characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("invalid email address"),
})
export type applySchema = z.infer<typeof applySchema>;
