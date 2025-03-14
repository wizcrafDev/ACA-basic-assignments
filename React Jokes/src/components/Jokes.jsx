import React, { useEffect, useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJoke = () => {
    setLoading(true);
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json())
      .then((data) => {
        setData(data || "General");
        setJoke(
          data.setup ? `${data.setup} - ${data.delivery || ""}` : data.joke
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching joke:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 px-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md text-center transform transition duration-300 hover:scale-[1.02]">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          😂 Random Joke
        </h2>

        <div className="border-l-4 bg-blue-100 text-left my-2 rounded-md border-blue-500 px-3 py-2 text-sm">
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="text-blue-600">{data.category}</span>
        </div>

        <blockquote className="text-gray-700 italic bg-blue-50 p-4 rounded-md border-l-4 border-blue-400 shadow-md transition-opacity duration-500 ease-in-out">
          <p className={`${loading ? "opacity-50" : "opacity-100"}`}>
            {loading ? "Loading..." : joke}
          </p>
        </blockquote>

        <button
          onClick={fetchJoke}
          className="mt-6 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default Jokes;
