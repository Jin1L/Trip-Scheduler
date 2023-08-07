import { atom, useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";

const checkStationAtom = atomWithImmer<boolean>(false);
const checkTourAtom = atomWithImmer<boolean>(false);
const transportationAtom = atomWithImmer<string>("");
const hotelAtom = atomWithImmer<string>("");
const locationAtom = atomWithImmer<string>("");
const budgetAtom = atomWithImmer<string>("");
const travellerAtom = atomWithImmer<string>("");
const startDateAtom = atomWithImmer<string>("");
const endDateAtom = atomWithImmer<string>("");

export function useSearchValues() {
    const [ checkStation, setCheckStation ] = useAtom(checkStationAtom);
    const [ checkTour, setCheckTour ] = useAtom(checkTourAtom);
    const [ transportation, setTransportation ] = useAtom(transportationAtom);
    const [ hotel, setHotel ] = useAtom(hotelAtom);
    const [ location, setLocation ] = useAtom(locationAtom);
    const [ budget, setBudget] = useAtom(budgetAtom);
    const [ traveller, setTraveller] = useAtom(travellerAtom);
    const [ startDate, setStartDate] = useAtom(startDateAtom);
    const [ endDate, setEndDate ] = useAtom(endDateAtom);




    return{
        checkStation,
        setCheckStation,
        checkTour,
        setCheckTour,
        transportation,
        setTransportation,
        hotel,
        setHotel,
        location,
        setLocation,
        budget,
        setBudget,
        traveller,
        setTraveller,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
    }
}

