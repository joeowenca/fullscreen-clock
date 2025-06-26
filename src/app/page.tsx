"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[80%]">
        <h1 className="2xl:text-[180pt] xl:text-[130pt] lg:text-[90pt] md:text-[70pt] sm:text-[50pt] text-[30pt] text-shadow-[0_0px_30px_rgb(46_204_113_/_1)]">
          {currentTime.toLocaleTimeString()}
        </h1>
      </div>
    </div>
  );
}
