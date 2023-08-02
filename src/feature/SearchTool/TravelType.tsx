import { Checkbox } from "@/components/ui/checkbox";

const TravelType = () => {
  return (
    <>
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
    </>
  );
};

export default TravelType;
