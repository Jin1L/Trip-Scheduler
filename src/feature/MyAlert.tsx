import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

export type MsgTypes = "error" | "success" | "warning";
export interface AlertProps {
  message: string;
  alertTitle: string;
  type: MsgTypes;
}

interface AlertMessage {
  [key: string]: AlertProps;
}

export const AlertMessages: AlertMessage = {
  success: {
    message: "Your account has been created! Welcome to WanderPlan.",
    alertTitle: "Congratulations!",
    type: "success",
  },
  error: {
    message:
      "This account already exists with the email. Unable to create an account.",
    alertTitle: "Error!",
    type: "error",
  },
  warning: {
    message: "This action is irreversible. Do you still want to proceed?",
    alertTitle: "Warning!",
    type: "warning",
  },
};

const MyAlert = ({ message, alertTitle, type }: AlertProps) => {
  return (
    <Alert variant={type === "error" ? "destructive" : "default"}>
      {type === "error" ? (
        <AlertCircle className="h-4 w-4" />
      ) : (
        <Terminal className="h-4 w-4" />
      )}
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
    // <Alert>
    //   <Terminal className="h-4 w-4" />
    //   <AlertTitle>Heads up!</AlertTitle>
    //   <AlertDescription>
    //     You can add components and dependencies to your app using the cli.
    //   </AlertDescription>
    // </Alert>
  );
};

export default MyAlert;
