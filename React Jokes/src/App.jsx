import { useState } from "react";
import Counter from "./components/Counter";
import Jokes from "./components/Jokes";
import ThemeToggle from "./components/ThemeToggle";
import UserList from "./components/UserList";
import UserLoginForm from "./components/UserLoginForm";
import UserRegistrationForm from "./components/UserRegistrationForm";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div
        className={`${
          isDark ? "bg-black" : "bg-gray-100"
        } w-full h-full min-h-screen`}
      >
        {/* <ThemeToggle isDark={isDark} setIsDark={setIsDark} /> */}
        {/* <Counter /> */}
        {/* <Jokes /> */}
        {/* <UserLoginForm /> */}
        <UserList />
        {/* <UserRegistrationForm /> */}
      </div>
    </>
  );
}

export default App;
