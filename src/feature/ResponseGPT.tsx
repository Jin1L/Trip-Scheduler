import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearchValues } from "@/hooks/useSearchValues";

const ResponseGPT = () => {
  const { gptSuggestion } = useSearchValues();

  return (
    <div className="ml-5 w-2/3 h-full border rounded-md shadow-md">
      <ScrollArea className="p-2 h-full w-full whitespace-pre-line">
        {gptSuggestion}
      </ScrollArea>
    </div>
  );
};

export default ResponseGPT;
