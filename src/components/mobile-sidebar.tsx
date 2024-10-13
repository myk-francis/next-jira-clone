"use client";
import React from "react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="lg:hidden ">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
    </Sheet>
  );
};
