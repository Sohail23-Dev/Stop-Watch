import { useEffect, useRef, useState } from "react";

const TimerC = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null); // Store interval ID

  const handleStart = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setSeconds(0);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Compute hours, minutes, seconds from total seconds
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  // Format as HH:MM:SS
  const format = (num) => num.toString().padStart(2, "0");

  return (
    <>
      <div className="flex-column">
        <div className="shadow-xl rounded-xl absolute w-md inset-x-0 top-50 left-140 bottom-100 h-46 bg-[url(.\assets\stopbg.jpg)] bg-blend-multiply">
          <div className="flex justify-center text-8xl py-2">
            <h1>
              {format(hours)}:{format(minutes)}:{format(secs)}
            </h1>
          </div>
          <div className="flex justify-center text-2xl">
            <button
              className="rounded-xl px-6 mx-4 my-3 py-2 bg-sky-600 hover:bg-sky-700"
              onClick={handleStart}
            >
              Start
            </button>
            <button
              className="rounded-xl px-6 mx-4 my-3 py-2 bg-red-600 hover:bg-red-700"
              onClick={handleStop}
            >
              Stop
            </button>
            <button
              className="rounded-xl px-6 mx-4 my-3 py-2 bg-amber-500 hover:bg-amber-600"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimerC;
