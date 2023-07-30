import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Searchbar = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
    <div className="p-5 w-1/2 rounded-md border shadow-md">
      <div className="flex mb-5 ml-56 items-center space-x-2">
        <Checkbox id="typeStationery" />
        <label
          htmlFor="typeStationery"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Stationery
        </label>
        <Checkbox id="typeTour" />
        <label
          htmlFor="typeTour"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Tour
        </label>
      </div>
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Transportation" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Public Transit</SelectItem>
              <SelectItem value="banana">Rent</SelectItem>
              <SelectItem value="blueberry">Personal Vechical</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-5">
        <Select>
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
      </div>
      <div className="mt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
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
          </form>
        </Form>
      </div>
      <div className="mt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
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
          </form>
        </Form>
      </div>
      <div className="mt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
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
          </form>
        </Form>
      </div>
      <div className="ml-28">
        <Button className="mt-5 ml-96">Search</Button>
      </div>
    </div>
  );
};

export default Searchbar;
