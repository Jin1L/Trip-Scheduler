// import { Button } from "@/components/ui/button";
// import TransportationSelect from "./SearchTool/TransportationSelect";
// import HotelSelect from "./SearchTool/HotelSelect";
// import LocationInput from "./SearchTool/LocationInput";
// import ButgetInput from "./SearchTool/BudgetInput";
// import TravellerSelect from "./SearchTool/TravellerSelect";
// import TravellingDate from "./SearchTool/Date/TravellingDate";
// import TravelType from "./SearchTool/TravelType";

// const Searchbar = () => {
//   return (
//     <div className="p-5 h-full w-1/3 rounded-md border shadow-md">
//       <div className="font-semibold items-center text-center space-x-2">
//         <TravelType />
//       </div>
//       <div className="mt-8">
//         <TransportationSelect />
//       </div>
//       <div className="mt-5">
//         <HotelSelect />
//       </div>
//       <div className="mt-5">
//         <LocationInput />
//       </div>
//       <div className="mt-5">
//         <ButgetInput />
//       </div>
//       <div className="mt-5">
//         <TravellerSelect />
//       </div>
//       <div className="mt-5">
//         <TravellingDate />
//       </div>
//       <div className="flex justify-end mt-14">
//         <Button className="mt-5">Search</Button>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;

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
import { toast } from "@/components/ui/use-toast";
import { DatePickerWithRange } from "./SearchTool/Date/DatePicker";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  transportation: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  hotel: z.string(),
  location: z.string(),
  budget: z.string(),
  traveller: z.string(),
});

const SearchSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="p-5 h-full w-1/3 rounded-md border shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="transportation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transportation</FormLabel>
                <FormControl>
                  <Select {...field}>
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
                  Transportation would you like to use
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
                  <Select {...field}>
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
            name="location"
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
            render={() => (
              <FormItem>
                <FormLabel>Traveller</FormLabel>
                <FormControl>
                  <Select>
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
          <div className="relative">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
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
            <div className="flex justify-end mt-14">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchSection;
