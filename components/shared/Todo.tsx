import React from "react";

const Todo = ({ todo }: any) => {
  return (
    <div className="w-full flex items-center justify-center bg-white py-3 px-20 rounded-2xl">
      <span className="text-center font-bold uppercase">{todo.title}</span>
    </div>
  );
};

export default Todo;
