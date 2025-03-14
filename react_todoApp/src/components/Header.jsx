import React from "react";
import { LuListTodo } from "react-icons/lu";
const Header = () => {
  return (
    <div className="w-full h-10 flex lg:items-center lg:justify-between py-7 px-4 lg:px-40">
      <div className="flex gap-3 items-center">
        <LuListTodo size={35} />
        <h1 className="text-xl font-bold">Chinedu's Todo App</h1>
      </div>
    </div>
  );
};

export default Header;
