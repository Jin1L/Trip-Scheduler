import { atom, useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";

const checkStationAtom = atomWithImmer<boolean>(false);
const checkTourAtom = atomWithImmer<boolean>(false);
const transportationAtom = atomWithImmer<string>("");
const hotelAtom = atomWithImmer<string>("");
const locationAtom = atomWithImmer<string>("");
const budgetAtom = atomWithImmer<string>("");
const travellerAtom = atomWithImmer<string>("");
const dateAtom = atomWithImmer<DateRange | undefined>({
  from: new Date(2022, 0, 20),
  to: addDays(new Date(2022, 0, 20), 20),
});
const endDateAtom = atomWithImmer<string>("");

export function useSearchValues() {
  const [checkStation, setCheckStation] = useAtom(checkStationAtom);
  const [checkTour, setCheckTour] = useAtom(checkTourAtom);
  const [transportation, setTransportation] = useAtom(transportationAtom);
  const [hotel, setHotel] = useAtom(hotelAtom);
  const [location, setLocation] = useAtom(locationAtom);
  const [budget, setBudget] = useAtom(budgetAtom);
  const [traveller, setTraveller] = useAtom(travellerAtom);
  const [date, setDate] = useAtom(dateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);

  return {
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
    date,
    setDate,
    endDate,
    setEndDate,
  };
}
