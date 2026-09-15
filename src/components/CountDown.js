"use client";

import { useEffect, useState } from "react";

export default function CountDown() {
  const targetDate = new Date("2026-02-14T19:00:00+13:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    // Initialize immediately
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-6 text-center text-white">
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <TimeBox label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}
