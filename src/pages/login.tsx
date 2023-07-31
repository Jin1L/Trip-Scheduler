"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/auth";
import { useForm } from "react-hook-form";
import Navbar from "../feature/Navbar";
import { Button } from "@/components/ui/button";
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
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Login = () => {
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

  function onSubmit(data: LoginInput) {
    console.log(data);
  }
  return (
    <div>
      <Navbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Start the journey with us here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
