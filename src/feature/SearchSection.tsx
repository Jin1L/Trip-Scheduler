import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { DatePickerWithRange } from "./SearchTool/Date/DatePicker";
import { Button } from "@/components/ui/button";

import { useSearchValues } from "@/hooks/useSearchValues";

const formSchema = z.object({
  transportation: z.string(),
  hotel: z.string(),
  location: z.string(),
  budget: z.string(),
  traveller: z.string(),
  date: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

const SearchSection = () => {
  const { date } = useSearchValues();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transportation: "",
      hotel: "",
      location: "",
      budget: "",
      traveller: "",
      startDate: date?.from,
      endDate: date?.to,
    },
  });

  const sendData = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/gpt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("completed succesfully");
        return { ok: true, data: null };
      } else {
        console.log("not successful");
        console.log(JSON.stringify(data));
      }
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
      return { ok: false, error: error };
    }
    return { ok: false, error: "Something went wrong" };
  };

  function onSubmit(data: z.infer<typeof formSchema>) {
    data.startDate = date?.from;
    data.endDate = date?.to;

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    sendData(data);
  }
  return (
    <div className="p-5 h-full w-1/3 rounded-md border shadow-md">
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="transportation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transportation</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Transportation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="publicTransit">
                          Public Transit
                        </SelectItem>
                        <SelectItem value="rent">Rent</SelectItem>
                        <SelectItem value="personalVehical">
                          Personal Vechical
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Transportation you would like to use
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hotel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Hotel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="oneStar">One Star</SelectItem>
                        <SelectItem value="twoStar">Two Star</SelectItem>
                        <SelectItem value="threeStar">Three Star</SelectItem>
                        <SelectItem value="fourStar">Four Star</SelectItem>
                        <SelectItem value="fiveStar">Five Star</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Transportation would you like to use
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="ex. Montreal, Canada" {...field} />
                </FormControl>
                <FormDescription>
                  Location you would like to travel
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Input placeholder="ex. 2000$" {...field} />
                </FormControl>
                <FormDescription>Budget for your trip</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="traveller"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Traveller</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Number of travellers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="one">1</SelectItem>
                        <SelectItem value="two">2</SelectItem>
                        <SelectItem value="three">3</SelectItem>
                        <SelectItem value="four">4</SelectItem>
                        <SelectItem value="five">5</SelectItem>
                        <SelectItem value="six">6</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>How many travelers?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex">
            <FormField
              control={form.control}
              name="date"
              render={() => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DatePickerWithRange className="mt-2.5" />
                  </FormControl>
                  <FormDescription>When are you travelling?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full mt-8">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchSection;
