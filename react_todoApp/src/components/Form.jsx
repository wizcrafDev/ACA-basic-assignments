import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import PropTypes from "prop-types";
const Form = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleAdd(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form className="w-full" onSubmit={submitForm}>
        <div className="flex items-center justify-center">
          <div className="w-full lg:max-w-[500px] h-10">
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Write your next task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full h-full p-2 text-black border border-gray-300  focus:outline-none rounded-l-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 block px-3 h-10 rounded-r-sm"
          >
            <IoAdd size={18} className="text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

Form.PropTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default Form;
