import { useEffect, useRef, useState } from "react";

const Timer2 = () => {
  let [seconds, setSeconds] = useState(0);
  let intervalRef = useRef(null);
  let colRef1 =useRef(null);
  let colRef2 =useRef(null);
  let colRef3 =useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    colRef1.current.style.backgroundColor = "#3e82f0";
    colRef2.current.style.backgroundColor = "red";
    colRef3.current.style.backgroundColor = "#757d1e";
    colRef1.current.style.color = "white";
    colRef2.current.style.color = "white";
    colRef3.current.style.color = "#828281";
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    colRef1.current.style.backgroundColor = "#3e82f0";
    colRef2.current.style.backgroundColor = "#851515";
    colRef3.current.style.backgroundColor = "#a7ba18";
    colRef1.current.style.color = "White";
    colRef2.current.style.color = "#828281";
    colRef3.current.style.color = "White";
  };
  const handleReset = () => {
    handleStop();
    setSeconds(0);
    colRef1.current.style.backgroundColor = "#2c62bf";
    colRef2.current.style.backgroundColor = "#ab0c1e";
    colRef3.current.style.backgroundColor = "#a7ba18";
    colRef1.current.style.color = "white";
    colRef2.current.style.color = "white";
    colRef3.current.style.color = "white";
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
      <div className="flex-column min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="shadow-xl rounded-3xl flex-column justify-center items-center w-full max-w-md p-4 sm:p-8 bg-gray-800 border-2 border-gray-700">
          <div className="flex justify-center text-4xl sm:text-6xl md:text-8xl font-mono">
            <h1 className="clock text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {format(hour)}:{format(min)}:{format(secs)}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4">
            <button
              className="w-full sm:w-auto rounded-xl px-4 sm:px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold transition-colors text-lg sm:text-xl"
              onClick={handleStart}
              ref={colRef1}
            >
              Start
            </button>
            <button
              className="w-full sm:w-auto rounded-xl px-4 sm:px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors text-lg sm:text-xl"
              onClick={handleStop}
              ref={colRef2}
            >
              Stop
            </button>
            <button
              className="w-full sm:w-auto rounded-xl px-4 sm:px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-colors text-lg sm:text-xl"
              onClick={handleReset}
              ref={colRef3}
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
