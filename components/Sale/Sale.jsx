"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sale = () => {
  const containerRef = useRef(null);

  const contentArray = ['ONE', 'TWO', 'THREE'];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } });

    contentArray.forEach((content, index) => {
      tl.fromTo(
        containerRef.current.children[index],
        { x: '100%' },
        { x: '0%', duration: 1, delay: index * 4 }
      );
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      animation: tl,
      scrub: 1,
      markers: true,
    });

    const interval = setInterval(() => {
      tl.restart();
    }, 2000);

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [contentArray]);

  return (
    <div className='w-full bg-black h-[3rem] relative'>
      <div className='w-full relative h-full flex items-center overflow-hidden' ref={containerRef}>
        {contentArray.map((content, index) => (
          <div
            key={index}
            className="bg-red-500 text-white text-center absolute w-full"
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;


