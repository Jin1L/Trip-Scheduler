import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormFieldElementProps = {
  form: UseFormReturn<>;
};

const FormFieldElement = ({ form, prop }: FormFieldElementProps) => {
  return (
    <FormField
      control={form.control}
      name="firstName"
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" text-black">first name</FormLabel>
          <FormControl>
            <Input placeholder="Enter your user name..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
