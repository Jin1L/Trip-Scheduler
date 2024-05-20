import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";

interface NavMenuProps {
  path: string;
  itemName: string;
}

const navItems: NavMenuProps[] = [
  {
    path: "/",
    itemName: "Main",
  },
  {
    path: "/login",
    itemName: "Login",
  },
];

export function NavMenu() {
  return (
    <>
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((navItem) => {
              return (
                <NavigationMenuItem key={navItem.path}>
                  <NavigationMenuLink
                    href={navItem.path}
                    className={navigationMenuTriggerStyle()}
                  >
                    {navItem.itemName}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">Setting</Button>
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
    </>
  );
}

export default NavMenu;
