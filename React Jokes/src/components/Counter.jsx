import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Square Counter</h2>
        <div className="text-4xl font-bold text-blue-500 my-4">
          {count * count}
        </div>
        <div className="flex justify-between gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition"
            onClick={handleIncrementCount}
          >
            +
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition"
            onClick={handleDecrementCount}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
