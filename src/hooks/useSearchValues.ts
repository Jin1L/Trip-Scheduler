import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

const checkStationAtom = atomWithImmer<boolean>(false);
const checkTourAtom = atomWithImmer<boolean>(false);
const dateAtom = atomWithImmer<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 3),
});
const gptSuggestionAtom = atomWithImmer<string>("");

export function useSearchValues() {
  const [checkStation, setCheckStation] = useAtom(checkStationAtom);
  const [checkTour, setCheckTour] = useAtom(checkTourAtom);
  const [date, setDate] = useAtom(dateAtom);
  const [gptSuggestion, setGptSuggestion] = useAtom(gptSuggestionAtom);

  return {
    checkStation,
    setCheckStation,
    checkTour,
    setCheckTour,
    date,
    setDate,
    gptSuggestion,
    setGptSuggestion,
  };
}
