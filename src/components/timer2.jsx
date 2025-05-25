import { useEffect, useRef, useState } from "react";

const Timer2 = () => {
  let [seconds, setSeconds] = useState(0);
  let intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

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
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  let hour = Math.floor(seconds / 3600)
  let min = Math.floor((seconds % 3600) / 60)
  let secs = seconds % 60

  const format = (num)=> num.toString().padStart(2, "0");
  return (
    <>
      <div className="flex-column">
        <div className="shadow-xl rounded-xl absolute w-md inset-x-0 top-50 left-140 bottom-100 h-46 bg-[url(.\assets\stopbg.jpg)] bg-blend-multiply">
          <div className="flex justify-center text-8xl py-2">
            <h1>
              {format(hour)}:{format(min)}:{format(secs)}
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

export default Timer2;
