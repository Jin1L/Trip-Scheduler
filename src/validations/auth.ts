import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(3).max(120),
  lastName: z.string().min(3).max(120),
  username: z.string().min(3).max(125),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
});
