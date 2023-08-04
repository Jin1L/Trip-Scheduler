import { atom, useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";

const checkStationAtom = atomWithImmer<boolean>(false);
const checkTourAtom = atomWithImmer<boolean>(false);
const transportationAtom = atomWithImmer<string>("");

export function useSearchValues() {
    const [ checkStation, setCheckStation ] = useAtom(checkStationAtom);
    const [ checkTour, setCheckTour ] = useAtom(checkTourAtom);
    const [ transportation, setTransportation ] = useAtom(transportationAtom);

    return{
        checkStation,
        setCheckStation,
        checkTour,
        setCheckTour,
        transportation,
        setTransportation,
    }
}

