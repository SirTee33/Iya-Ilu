import React, { useEffect, useState } from "react";

const NigeriaTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const lagosTime = now.toLocaleString("en-NG", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setTime(lagosTime);
    };

    updateTime(); // Set immediately on load
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <p className="drum-date">{time}</p>
  );
};

export default NigeriaTime;
