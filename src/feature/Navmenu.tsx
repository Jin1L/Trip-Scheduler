import { Button } from "@/components/ui/button";

export function NavMenu() {
  return (
    <>
      <div className="w-full pt-8">
        <div className="p-2 w-full h-5/6">
          <Button className="w-full" variant="ghost" asChild>
            <a href="/">Main</a>
          </Button>
        </div>

        {/* <NavigationMenu>
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
        </NavigationMenu> */}
      </div>
    </>
  );
}

export default NavMenu;
