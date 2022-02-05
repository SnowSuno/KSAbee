import React from "react";
import "./style.scss";

import RegisterModal from "./RegisterModal";
import UpdateModal from "./UpdateModal";

export enum ModalState {
  REGISTER = "register",
  UPDATE = "update",
}

interface ModalProps {
  modalState: ModalState | null;
  handleModalState: (state: ModalState | null) => void;
  fetchUserAccounts: () => Promise<void>;
}


const Modal = ({modalState, handleModalState, fetchUserAccounts}: ModalProps) => {
  const closeModal = () => handleModalState(null);

  const modal = {
    [ModalState.REGISTER]: <RegisterModal/>,
    [ModalState.UPDATE]: <UpdateModal/>
  }

  return (
    modalState &&
    <>
      <div className="background" onClick={closeModal}/>
      <div className="modal">
          {modal[modalState]}
      </div>
    </>

    // <div className={modalState === null ? 'modal__null' : 'modal__background'}>
    //   <div className="center">
    //     {
    //       modalState === null ? ''
    //     : <div className="modal">
    //         <div className="modal__header">
    //           <span>
    //             {
    //               modalState === ModalState.REGISTER ? '계정등록'
    //               : modalState === ModalState.UPDATE ? '계정 업데이트'
    //               : ''
    //             }
    //           </span>
    //           <button onClick={() => handleModalState(null)}>X</button>
    //         </div>
    //         {modalState === ModalState.REGISTER
    //           ? <RegisterModal_
    //             handleShowModal={handleModalState}
    //             fetchUserAccounts={fetchUserAccounts}
    //           />
    //           : modalState === ModalState.UPDATE
    //           ? <_UpdateModal
    //             handleShowModal={handleModalState}
    //             fetchUserAccounts={fetchUserAccounts}
    //           />
    //           : ''
    //         }
    //       </div>
    //     }
    //   </div>
    // </div>
  )
}

export default Modal
