"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../feature/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
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

export const Login = () => {
  const [formPage, setFormPage] = useState<number>(0);
  type LoginInput = z.infer<typeof loginSchema>;

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(form.watch());

  function onSubmit(data: LoginInput) {
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }
  return (
    <div>
      <Navbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="w-[350px]">
          <CardHeader className="items-center pb-4">
            <CardTitle className="mb-1">Sign up</CardTitle>
            <CardDescription>Start the journey with us here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className={cn("space-y-3 ", { hidden: formPage === 1 })}>
                  {/* email  */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* first name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=" text-black">
                          first name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your user name..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* last name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">last name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* This is for next page */}
                <div className={cn("space-y-3 ", { hidden: formPage === 0 })}>
                  {/* username */}
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Create your username..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        <FormDescription>
                          This is your public display name
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  {/* password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Create your password..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* confirm password */}
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">
                          *confirm password
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Confirm your password.."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    className={cn({ hidden: formPage === 0 })}
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    className={cn("border-[1px] rounded-md", {
                      hidden: formPage === 1,
                    })}
                    variant={"ghost"}
                    size="icon"
                    onClick={() => {
                      // validation
                      form.trigger(["email", "firstName", "lastName"]);
                      const emailState = form.getFieldState("email");
                      const firstNameState = form.getFieldState("firstName");
                      const lastNameState = form.getFieldState("lastName");

                      if (!emailState.isDirty || emailState.invalid) return;
                      if (!firstNameState.isDirty || firstNameState.invalid)
                        return;
                      if (!lastNameState.isDirty || lastNameState.invalid)
                        return;

                      setFormPage(1);
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    className={cn("border-[1px] rounded-md", {
                      hidden: formPage === 0,
                    })}
                    size="icon"
                    variant={"ghost"}
                    onClick={() => setFormPage(0)}
                  >
                    <ArrowLeft className="w-4 h-4" />
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
