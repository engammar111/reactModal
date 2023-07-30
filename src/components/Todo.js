import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export default function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deletebtn() {
    setIsModalOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deletebtn}>
          {" "}
          {props.button}
        </button>
      </div>
      {isModalOpen && <Modal />}
      {isModalOpen && <Backdrop />}
    </div>
  );
}
