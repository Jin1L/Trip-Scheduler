"use client";
import React from "react";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
    path: "/history",
    itemName: "History",
  },
  {
    path: "/about",
    itemName: "About",
  },
  {
    path: "/login",
    itemName: "Login",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((navItem) => {
          return (
            <NavigationMenuItem>
              <Link to={navItem.path}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navItem.itemName}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
