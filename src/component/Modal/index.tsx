import React from "react";

import RegisterModal from "./RegisterModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

import './style.css'

export enum ModalState {
  REGISTER = "register",
  UPDATE = "update",
  DELETE = "delete",
}

interface ModalProps {
  modalState: ModalState | null;
  handleModalState: (state: ModalState | null) => void;
  fetchUserAccounts: () => Promise<void>;
}


const Modal = ({modalState, handleModalState, fetchUserAccounts}: ModalProps) => {
  return (
    <div className={modalState === null ? 'modal__null' : 'modal__background'}>
      <div className="center">

        <div className="modal">
          {modalState === null ? '' :
            <div className="modal__header">
                <span>
                  {
                    modalState === 'register' ? '계정등록'
                      : modalState === 'update' ? '계정 업데이트'
                        : modalState === 'delete' ? '계정삭제' : ''
                  }
                </span>
              <button onClick={() => handleModalState(null)}>X</button>
            </div>
          }
          {/*{modalState === 'register'*/}
          {/*  ? <RegisterModal*/}
          {/*    handleShowModal={handleModalState}*/}
          {/*    fetchUserAccounts={fetchUserAccounts}*/}
          {/*  />*/}
          {/*  : modalState === 'update'*/}
          {/*  ? <UpdateModal*/}
          {/*      handleShowModal={handleModalState}*/}
          {/*      fetchUserAccounts={fetchUserAccounts}*/}
          {/*    />*/}
          {/*  : modalState === 'delete'*/}
          {/*  ? <DeleteModal*/}
          {/*      handleShowModal={handleModalState}*/}
          {/*      fetchUserAccounts={fetchUserAccounts}*/}
          {/*    />*/}
          {/*  : ''*/}
          {/*}*/}
        </div>
      </div>
    </div>
  )
}

export default Modal
