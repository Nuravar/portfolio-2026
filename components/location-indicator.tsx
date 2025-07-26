import React, { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react'; // Import icons from lucide-react

const LocationAndTimeDisplay = () => {
  const [torontoTime, setTorontoTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Options for formatting the time to Toronto's timezone
      // Use 'as const' to ensure literal types are inferred for properties
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/Toronto'
      } as const; // <--- Add 'as const' here

      setTorontoTime(now.toLocaleTimeString('en-US', options));
    };

    // Update time immediately on component mount
    updateTime();

    // Set up an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center text-sm text-gray-400 space-x-4 pt-4">
      {/* Location */}
      <div className="flex items-center gap-1">
        <MapPin className="w-3 h-3" strokeWidth={1.5} />
        <small>Toronto, ON</small>
      </div>

      {/* Time */}
      <div className="flex items-center gap-1">
        <Clock className="w-3 h-3" strokeWidth={1.5} />
        <small>{torontoTime}</small>
      </div>
    </div>
  );
};

export default LocationAndTimeDisplay;