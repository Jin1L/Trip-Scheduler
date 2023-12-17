"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/validations/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../feature/Navbar";
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
import { motion } from "framer-motion";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import MyAlert, { MsgTypes, AlertMessages } from "@/feature/MyAlert";

export const SignUp = () => {
  const [formPage, setFormPage] = useState<number>(0);
  const [alertMsg, setAlertMsg] = useState<MsgTypes>("success");
  const navigate = useNavigate();

  type signUpInput = z.infer<typeof signUpSchema>;

  const form = useForm<signUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      // firstName: "",
      // lastName: "",
      // username: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(form.watch());

  const signUp = (data: signUpInput, e?: React.BaseSyntheticEvent) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // navigate to login page once user is signed up
        navigate("/login", { replace: true });

        // routeMain();
        // setShowAlert(true);

        // if (alertMsg) {
        //   return (
        //     <MyAlert
        //       message={AlertMessages[alertMsg].message}
        //       alertTitle={AlertMessages[alertMsg].alertTitle}
        //       type={AlertMessages[alertMsg].type as MsgTypes}
        //     />
        //   );
        // }

        // Alert({
        //   message: "Your account has been created! Welcome to WanderPlan.",
        //   alertTitle: "Congratulations!",
        //   type: "success",
        // });
      })
      .catch((error) => {
        // setShowAlert(true);
        setAlertMsg("error");

        // if (showAlert) {
        //   return (
        //     <MyAlert
        //       message={AlertMessages[alertMsg].message}
        //       alertTitle={AlertMessages[alertMsg].alertTitle}
        //       type={AlertMessages[alertMsg].type as MsgTypes}
        //     ></MyAlert>
        //   );
        // }
        // Alert({
        //   message:
        //     "This account already exists with the email. Unable to create an account.",
        //   alertTitle: "Error",
        //   type: "error",
        // });
        // alert(error.message);
      });

    // updateProfile(auth.currentUser, {
    //   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    // }).then(() => {
    //   // Profile updated!
    //   // ...
    // }).catch((error) => {
    //   // An error occurred
    //   // ...
    // });
    e?.preventDefault();
  };

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
              <form onSubmit={form.handleSubmit(signUp)} className="space-y-3">
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
                        <FormLabel className="text-black">email</FormLabel>
                        <FormControl>
                          <Input
                            {...form.register("email")}
                            placeholder="Enter your email..."
                            {...field}
                            // value={userEmail}
                            // onChange={(e) => setUserEmail(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* first name */}
                  {/* <FormField
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
                  /> */}
                  {/* last name */}
                  {/* <FormField
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
                  /> */}
                </motion.div>
                {/* This is for next page */}
                <motion.div
                  className={cn("space-y-3", {
                    hidden: formPage === 0,
                  })}
                  animate={{ translateX: `${100 - formPage * 100}%` }}
                >
                  {/* username */}
                  {/* <FormField
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
                  /> */}

                  {/* password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black">password</FormLabel>
                        <FormControl>
                          <Input
                            {...form.register("password")}
                            placeholder="Create your password..."
                            autoComplete="off"
                            type="password"
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
                            {...form.register("confirmPassword")}
                            placeholder="Confirm your password.."
                            autoComplete="off"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <div className="flex gap-2">
                  <Button
                    className={cn("mt-2", { hidden: formPage === 0 })}
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    className={cn("mt-2 border-[1px] rounded-md", {
                      hidden: formPage === 1,
                    })}
                    variant={"ghost"}
                    size="icon"
                    onClick={() => {
                      // validating before moving onto username & passwd
                      form.trigger(["email"]);
                      const emailState = form.getFieldState("email");
                      // const firstNameState = form.getFieldState("firstName");
                      // const lastNameState = form.getFieldState("lastName");

                      if (!emailState.isDirty || emailState.invalid) return;
                      // if (!firstNameState.isDirty || firstNameState.invalid)
                      //   return;
                      // if (!lastNameState.isDirty || lastNameState.invalid)
                      //   return;

                      setFormPage(1);
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    className={cn("mt-2 border-[1px] rounded-md", {
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
      {alertMsg && (
        <MyAlert
          message={AlertMessages[alertMsg].message}
          alertTitle={AlertMessages[alertMsg].alertTitle}
          type={AlertMessages[alertMsg].type as MsgTypes}
        ></MyAlert>
      )}
    </div>
  );
};
