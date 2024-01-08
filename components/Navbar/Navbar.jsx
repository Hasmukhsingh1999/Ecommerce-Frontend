"use client";
import React from 'react';
import { SearchIcon } from "@chakra-ui/icons";
import useSticky from "@/hooks/stickyEffect";

const Navbar = () => {
  const isSticky = useSticky();

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`flex w-full justify-between container bg-red-500 min-h-[70px] items-center sticky-navbar ${
          isSticky ? "sticky top-0 z-10" : ""
        }`}
      >
        <div className="flex-1">
          <SearchIcon />
        </div>
        <div className="flex-1">LOGO NAME</div>
        <div>LEFT ICONS</div>
      </div>

      {/* Bottom Navbar */}
      <div className={`min-h-[50px] bg-yellow-400 static`}>
        NavbarBottom
      </div>
    </>
  );
};

export default Navbar;
