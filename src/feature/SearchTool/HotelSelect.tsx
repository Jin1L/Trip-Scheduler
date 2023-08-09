import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchValues } from "@/hooks/useSearchValues";

const HotelSelect = () => {
  const { setHotel } = useSearchValues();

  const onChange = (mode: string) => {
    setHotel(mode);
  };

  return (
    <Select onValueChange={onChange}>
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
  );
};

export default HotelSelect;
