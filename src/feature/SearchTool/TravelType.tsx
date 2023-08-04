import { Checkbox } from "@/components/ui/checkbox";
import { useSearchValues } from "@/hooks/useSearchValues";


const TravelType = () => {
  const { checkStation, setCheckStation, checkTour, setCheckTour} = useSearchValues()
  
  const onClickTour = () => {
    if (checkTour && !checkStation) {
      setCheckTour(false);
    } else if (!checkTour && !checkStation) {
      setCheckTour(true);
    }
  };

  const onClickStation = () => {
    if (!checkTour && checkStation) {
      setCheckStation(false);
    } else if (!checkTour && !checkStation) {
      setCheckStation(true);
    }
  };

  return (
    <>
      {checkTour ? (
        <Checkbox
          id="typeStationery"
          disabled
          className="cursor-not-allowed opacity-70"
        />
      ) : (
        <Checkbox id="typeStationery" onClick={onClickStation} />
      )}
      <label
        htmlFor="typeStationery"
        className="text-sm font-medium leading-none"
      >
        Stationery
      </label>

      {checkStation ? (
        <Checkbox
          id="typeTour"
          disabled
          className="cursor-not-allowed opacity-70"
        />
      ) : (
        <Checkbox id="typeTour" onClick={onClickTour} />
      )}
      <label htmlFor="typeTour" className="text-sm font-medium leading-none">
        Tour
      </label>
    </>
  );
};

export default TravelType;

