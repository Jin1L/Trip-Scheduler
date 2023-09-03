"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../feature/Navbar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export const Login = () => {
  const [formPage] = useState<number>(0);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  type LoginInput = z.infer<typeof loginSchema>;

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(form.watch());

  // navigating to main page
  let navigate = useNavigate();
  const routeMain = () => {
    navigate("/");
  };

  const LogIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert("Account does not exist or invalid password");
      });
    routeMain();
  };

  return (
    <div>
      <Navbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="w-[350px]">
          <CardHeader className="items-center pb-4">
            <CardTitle className="mb-1">Log In</CardTitle>
            <CardDescription>Continue the journey with us here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(LogIn)} className="space-y-3">
                <motion.div
                  className={cn("space-y-3 ", {
                    hidden: formPage === 1,
                  })}
                  animate={{ translateX: `-${formPage * 100}%` }}
                  transition={{ ease: "easeInOut" }}
                >
                  {/* email  */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email..."
                            {...field}
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">Password</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            {...field}
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            placeholder="Password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <div className="flex mt-2 mr-1 justify-end">
                  <p className="flex text-xs gap-x-2">
                    You don't have an account?{" "}
                    <Link className="flex text-xs underline" to="/signup">
                      Sign Up
                    </Link>
                  </p>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button
                    className={cn({ hidden: formPage === 1 })}
                    type="submit"
                    onClick={() => {
                      // validating before logging in
                      form.trigger(["email", "password"]);
                      const emailState = form.getFieldState("email");
                      const passwordState = form.getFieldState("password");
                      if (!emailState.isDirty || emailState.invalid) return;
                      if (!passwordState.isDirty || passwordState.invalid)
                        return;
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
