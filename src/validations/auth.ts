import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "email is required" })
      .includes("@")
      .email({ message: 'Invalid email: Ex: "@gmail.com"' }),
    firstName: z
      .string()
      .min(3, { message: "must be at least 3 character(s)" })
      .max(120),
    lastName: z
      .string()
      .min(3, { message: "must be at least 3 character(s)" })
      .max(120),
    username: z
      .string()
      .min(3, { message: "must be at least 3 character(s)" })
      .max(125),
    password: z
      .string()
      .min(6, { message: "password must be at least 6 character(s)" })
      .max(100),
    confirmPassword: z.string().min(6).max(100),
  })
  .refine((data) => !data.password.toLowerCase().includes(data.username), {
    message: "password should not contain username",
    path: ["username"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .includes("@")
    .email({ message: 'Invalid email: Ex: "@gmail.com"' }),
    password: z
    .string()
    .min(6, { message: "password must be at least 6 character(s)" })
    .max(100),
});
