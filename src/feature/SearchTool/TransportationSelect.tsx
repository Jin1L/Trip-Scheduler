import { useSearchValues } from "@/hooks/useSearchValues";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { useState } from "react";

const TransportationSelect = () => {
  // const { transportation, setTransportation } = useSearchValues()
  const [ transportation, setTransportation ] = useState("")

  const onChange = () => {
    // setTransportation(transitType);
    // console.log(transportation);
    console.log("hello im here")
  }
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Transportation" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="publicTransit" onChange={() => onChange()}>Public Transit</SelectItem>
          <SelectItem value="rent" onChange={() => onChange()}>Rent</SelectItem>
          <SelectItem value="personalVehical" onChange={() => onChange()}>Personal Vechical</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TransportationSelect