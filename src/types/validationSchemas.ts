import { z } from "zod";

// Common password regex to include all special characters
const passwordRegex =
  /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

// Signup Schema
export const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        passwordRegex,
        "Password must contain a number and a special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Attach the error to confirmPassword field
  });

// Login Schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Email Code Schema
export const emailCodeSchema = z.object({
  code: z
    .array(z.string().length(1, "Each digit must be exactly 1 character"))
    .length(6, "OTP must be exactly 6 digits"),
});

// Reset Password Schema
export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        passwordRegex,
        "Password must contain a number and a special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Attach the error to confirmPassword field
  });

// Infer TypeScript types from the schemas
export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type EmailCodeFormData = z.infer<typeof emailCodeSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
