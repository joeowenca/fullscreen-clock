"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    document.title = "Fullscreen Clock";
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="xanh w-screen h-screen flex justify-center items-center">
      <h1 className="lg:text-[180pt] text-shadow-[0_0px_30px_rgb(211_84_0_/_1)]">
        {currentTime.toLocaleTimeString()}
      </h1>
    </div>
  );
}
