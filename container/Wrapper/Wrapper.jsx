import Navbar from "@/components/Navbar/Navbar";
import Sale from "@/components/Sale/Sale";
import React from "react";

const Wrapper = () => {
  return (
    <div className=" min-h-screen w-full bg-red-500">
      <Sale />
      <Navbar />
    </div>
  );
};

export default Wrapper;
