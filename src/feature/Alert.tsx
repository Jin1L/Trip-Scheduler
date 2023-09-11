import {
  Alert as AlertComponent,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

interface AlertProps {
  message: string;
  alertTitle: string;
  type: "success" | "warning" | "error";
}

const Alert = ({ message, alertTitle, type }: AlertProps) => {
  console.log("Reaches here");
  return (
    <AlertComponent variant={type === "error" ? "destructive" : "default"}>
      {type === "error" ? (
        <AlertCircle className="h-4 w-4" />
      ) : (
        <Terminal className="h-4 w-4" />
      )}
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </AlertComponent>
  );
};

export default Alert;
