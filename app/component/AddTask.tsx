"use client";
import React, {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import Modal from "./modal";
import {v4 as uuidv4} from "uuid";
import {addTodo} from "@/api";
import {useRouter} from "next/navigation";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleSubmitTodo = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Add Task <AiOutlinePlus classname="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitTodo}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
              onChange={(e) => setNewTaskValue(e.target.value)}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
