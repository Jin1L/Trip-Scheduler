import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogIn, Settings } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="px-8 py-6 flex justify-between">
          <Button variant="ghost" size="icon">
            <a href="/login"> 
              <LogIn className="h-5 w-5" />
            </a>
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Add or update your environment variables and keys.
                </DialogTitle>
              </DialogHeader>
              <DialogDescription>Add your key</DialogDescription>
              <div className="grid w-full space-y-3">
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter variable name"
                    disabled
                    value={"OPENAI_API_KEY"}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium" htmlFor="value">
                    Value
                  </label>
                  <Input id="value" placeholder="Enter variable value" />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium" htmlFor="value">
                    Model
                  </label>
                  <Input id="value" placeholder="Enter model name" />
                </div>
                <div className="flex w-full justify-end">
                  <Button>Save</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </footer>
    </>
  );
};
