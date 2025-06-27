"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    async function getWeather() {
      const res = await fetch("/api/weather");
      const data = await res.json();
      setTemp(data.temperature);
    }

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      getWeather();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const clockOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const month: string = String(currentTime.getMonth() + 1).padStart(2, "0");
  const day: string = String(currentTime.getDate()).padStart(2, "0");

  const formattedDate: string = `${month}/${day}`;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[80%] 2xl:text-[180pt] xl:text-[130pt] lg:text-[90pt] md:text-[70pt] sm:text-[50pt] text-[30pt] text-shadow-[0_0px_30px_rgb(46_204_113_/_1)]">
        <p>{currentTime.toLocaleTimeString("en-US", clockOptions)}</p>
        <p>{formattedDate}</p>
        <p>{temp !== null ? ` ${temp}°C` : "Loading..."}</p>
      </div>
    </div>
  );
}
