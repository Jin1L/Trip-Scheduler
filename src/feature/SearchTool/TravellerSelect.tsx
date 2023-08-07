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
import { toast } from "@/components/ui/use-toast";
import { useSearchValues } from "@/hooks/useSearchValues";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const TravellerSelect = () => {
  const { setTraveller } = useSearchValues()

  const onChange = (mode : string) => {
    setTraveller(mode);
  }
  
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
<Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={() => (
                <FormItem>
                  <FormLabel>Traveller</FormLabel>
                  <FormControl>
                    <Select onValueChange={onChange}>
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
  );
};

export default TravellerSelect;

