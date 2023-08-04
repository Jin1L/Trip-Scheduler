import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const HotelSelect = () => {
  return (
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
  );
};

export default HotelSelect