import { Button } from "@/components/ui/button";
import TransportationSelect from "./SearchTool/TransportationSelect";
import HotelSelect from "./SearchTool/HotelSelect";
import LocationInput from "./SearchTool/LocationInput";
import ButgetInput from "./SearchTool/BudgetInput";
import TravellerSelect from "./SearchTool/TravellerSelect";
import TravellingDate from "./SearchTool/Date/TravellingDate";
import TravelType from "./SearchTool/TravelType";

const Searchbar = () => {
  return (
    <div className="p-5 h-full w-1/3 rounded-md border shadow-md">
      <div className="font-semibold items-center text-center space-x-2">
        <TravelType />
      </div>
      <div className="mt-8">
        <TransportationSelect />
      </div>
      <div className="mt-5">
        <HotelSelect />
      </div>
      <div className="mt-5">
        <LocationInput />
      </div>
      <div className="mt-5">
        <ButgetInput />
      </div>
      <div className="mt-5">
        <TravellerSelect />
      </div>
      <div className="mt-5">
        <TravellingDate />
      </div>
      <div className="flex justify-end mt-14">
        <Button className="mt-5">Search</Button>
      </div>
    </div>
  );
};

export default Searchbar;
