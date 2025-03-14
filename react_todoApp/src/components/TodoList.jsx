import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
const TodoList = ({ handleDelete, handleToggleComplete, todos }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-6 space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between border border-stone-300 p-4 rounded-lg bg-black text-white"
        >
          <div className="flex items-center space-x-3">
            {/* Checkbox Circle */}
            <div
              onClick={() => handleToggleComplete(todo.id)}
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                todo.completed
                  ? "bg-green-500 border-green-500"
                  : "border-green-500"
              }`}
            >
              {!todo.completed && (
                <div className="w-2 h-2 bg-transparent rounded-full"></div>
              )}
            </div>
            {/* Todo Title */}
            <span
              className={`text-lg ${
                todo.completed ? "line-through text-stone-400" : "text-white"
              }`}
            >
              {todo.content}
            </span>
          </div>
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-800 hover:text-red-500"
            >
              <FaTrash size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

TodoList.PropTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TodoList;
