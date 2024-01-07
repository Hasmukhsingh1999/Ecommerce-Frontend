"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Sale = () => {
  const items = ["ONE", "TWO", "THREE"];
  const [currentItem, setCurrentItem] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const animateSlide = (index) => {
      gsap.to(container.children, {
        x: -index * container.clientWidth,
        duration: 0.5,
        ease: "power2.inOut",
      });
    };

    const intervalId = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % items.length);
    }, 2000);

    animateSlide(currentItem);

    return () => {
      clearInterval(intervalId);
    };
  }, [items.length, currentItem]);

  return (
    <div className="bg-black h-[3rem] container overflow-hidden flex items-center justify-center">
      <div ref={containerRef} className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-red-500 text-center`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
