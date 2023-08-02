import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const TransportationSelect = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Transportation" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="publicTransit">Public Transit</SelectItem>
          <SelectItem value="rent">Rent</SelectItem>
          <SelectItem value="personalVehical">Personal Vechical</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TransportationSelect