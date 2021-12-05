import React from "react";

import RegisterModal from "./RegisterModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

interface ModalProps {
  showModal : string;
  handleShowModal: (input: string) => void;
}

const Modal = ({showModal, handleShowModal}: ModalProps) => {
  return (
      <div className={showModal === 'null' ? '' : 'background'}>
        <div className="modal">
          {showModal === 'null' ? '' :
            <div>
              <button onClick={() => handleShowModal('null')}>x</button>
            </div>
          }
          {showModal === 'register'
            ? <RegisterModal/>
            : showModal === 'update'
            ? <UpdateModal/>
            : showModal === 'delete'
            ? <DeleteModal/>
            : ''
          }
        </div>
      </div>
  )
}

export default Modal