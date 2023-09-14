import React from "react";

const modal = ({modalOpen, setModalOpen,children}) => {
  return (
    <dialog className={`modal  ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          {children}
      </div>
    </dialog>
  );
};

export default modal;
