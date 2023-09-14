import React from "react";
import Task from "./Task";

const TodoList = ({tasks}) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <Task task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;
