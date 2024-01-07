"use client";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between container bg-red-500">
      <div className="flex-1">
        <SearchIcon />
      </div>
      <div className="flex-1">LOGO NAME</div>
      <div>LEFT ICONS</div>
    </div>
  );
};

export default Navbar;
