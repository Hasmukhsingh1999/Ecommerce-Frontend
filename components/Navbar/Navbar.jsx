"use client";

import React, { useRef, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSticky from "@/hooks/stickyEffect";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const isSticky = useSticky();
  const navbarRef = useRef(null);

  useEffect(() => {
    if (isSticky) {
      gsap.to(navbarRef.current, {
        scrollTrigger: {
          trigger: navbarRef.current,
          start: "top top", 
          scrub: 0.3,
        },
        opacity: 0,
        zIndex: 10,
        ease: "power2.out",
      });
    } else {
      gsap.to(navbarRef.current, {
        scrollTrigger: {
          trigger: navbarRef.current,
          start: "top top", 
          scrub: 0.3,
        },
        duration: 0.3,
        opacity: 1,
        zIndex: 1,
        ease: "power2.out",
      });
    }
  }, [isSticky]);

  return (
    <div
      ref={navbarRef}
      style={isSticky ? { position: "sticky", top: 0, zIndex: 10 } : {}}
    >
      {/* Top Navbar */}
      <div
        className={`flex w-full justify-between container bg-red-500 min-h-[70px] items-center sticky-navbar `}
      >
        <div className="flex-1">
          <SearchIcon />
        </div>
        <div className="flex-1">LOGO NAME</div>
        <div>LEFT ICONS</div>
      </div>

      {/* Bottom Navbar */}
      <div className={`min-h-[50px] bg-yellow-400 static`}>NavbarBottom</div>
    </div>
  );
};

export default Navbar;
