import { z } from "zod";

// Login
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(30),
});

export type LoginSchemaT = z.infer<typeof loginSchema>;

// Signup
export const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5).max(30),
});

export type SignupSchemaT = z.infer<typeof signupSchema>;
