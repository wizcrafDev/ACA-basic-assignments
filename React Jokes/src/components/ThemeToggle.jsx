const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <div className="flex justify-center py-8">
      <div
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all ${
          isDark ? "bg-gray-500" : "bg-gray-300"
        }`}
        onClick={() => setIsDark(!isDark)}
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ${
            isDark ? "translate-x-7 bg-blue-500" : "translate-x-0 bg-white"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
