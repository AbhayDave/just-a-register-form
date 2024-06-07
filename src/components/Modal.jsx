import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, className }) => {
  return (
    <>
      <div className={className}>
        <div className="text-4xl">ABHAY DAVE</div>
        <RiCloseLine className="text-5xl" onClick={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default Modal;
