"use client";
import React, {useState} from "react";
import {AiFillDelete} from "react-icons/ai";
import {BiSolidEdit} from "react-icons/bi";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import { editTodo } from "@/api";
import { deleteTodo } from "@/api";

const Task = ({task}) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [textEdit, setTextEdit] = useState(task.text);

  const handleSubmitEditTodo = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: textEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id)
    setOpenModalDeleted(false);
    router.refresh();
  }

  return (
    <>
      <tr className="bg-base-200" key={task.id}>
        <th>{task.id}</th>
        <td>{task.text}</td>
        <td onClick={() => setOpenModalEdit(true)}>
          <BiSolidEdit cursor="pointer" />
        </td>
        <td onClick={() => setOpenModalDeleted(true)}>
          <AiFillDelete cursor="pointer" />
        </td>
      </tr>
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEditTodo}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
              value={textEdit}
              onChange={(e) => setTextEdit(e.target.value)}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
       <h3 className="text-large">Are You sure, You Want to delete this task?</h3>
         <div className="modal-action">
            <button className="btn" onClick={() => handleDeleteTodo(task.id)}>Yes</button>
            <button className="btn" onClick={() => setOpenModalDeleted(false)}>No</button>
         </div>
      </Modal>
    </>
  );
};

export default Task;
