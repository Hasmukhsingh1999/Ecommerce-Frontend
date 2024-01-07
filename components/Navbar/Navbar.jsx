"use client";
import useSticky from "@/hooks/stickyEffect";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";


const Navbar = () => {
  const isSticky = useSticky();
  return (
    <div
      className={`flex w-full justify-between container bg-red-500 min-h-[60px] flex items-center justify-center sticky-navbar ${
        isSticky ? "sticky top-0 z-10" : ""
      }`}
    >
      <div className="flex-1">
        <SearchIcon />
      </div>
      <div className="flex-1">LOGO NAME</div>
      <div>LEFT ICONS</div>
    </div>
  );
};

export default Navbar;
