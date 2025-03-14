import React from "react";

const EmptyTodo = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="">
        <h1 className="text-4xl font-bold">No Todos Found</h1>
        <p className="mt-5 text-xl">Add some tasks to get started.</p>
      </div>
    </div>
  );
};

export default EmptyTodo;
