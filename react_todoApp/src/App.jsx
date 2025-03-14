import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import EmptyTodo from "./components/EmptyTodo";

function App() {
  const generateRandomId = () => Math.random().toString(36).substring(2, 15);
  const [todos, setTodos] = useState([]);
  const handleToggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const handleAdd = (value) => {
    console.log(value);

    setTodos((prevTodo) => [
      ...prevTodo,
      { id: generateRandomId(), content: value, completed: false },
    ]);
  };
  console.log(todos);

  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  return (
    <>
      <div className="bg-[#0D0D0D] w-full h-full min-h-screen text-white px-4">
        <Header />
        <Hero totalTasks={totalTasks} completedTasks={completedTasks} />
        <Form handleAdd={handleAdd} />
        {totalTasks === 0 ? (
          <EmptyTodo />
        ) : (
          <TodoList
            handleDelete={handleDelete}
            handleToggleComplete={handleToggleComplete}
            todos={todos}
          />
        )}
      </div>
    </>
  );
}

export default App;
