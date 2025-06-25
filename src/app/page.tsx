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
      <h1 className="2xl:text-[180pt] xl:text-[140pt] lg:text-[100pt] md:text-[80pt] sm:text-[60pt] text-[40pt] text-shadow-[0_0px_30px_rgb(211_84_0_/_1)]">
        {currentTime.toLocaleTimeString()}
      </h1>
    </div>
  );
}
