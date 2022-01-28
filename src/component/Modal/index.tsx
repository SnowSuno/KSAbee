import React from "react";

import RegisterModal from "./RegisterModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

import './style.css'

export enum ModalState {
  REGISTER = "register",
  UPDATE = "update",
  DELETE = "delete",
  LOAD = "load",
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
        {
          modalState === null ? ''
        : modalState === ModalState.LOAD
        ? <div className="loader"></div>
        : <div className="modal">
            <div className="modal__header">
              <span>
                {
                  modalState === ModalState.REGISTER ? '계정등록'
                  : modalState === ModalState.UPDATE ? '계정 업데이트'
                  : modalState === ModalState.DELETE ? '계정삭제' : ''
                }
              </span>
              <button onClick={() => handleModalState(null)}>X</button>
            </div>
            {modalState === ModalState.REGISTER
              ? <RegisterModal
                handleShowModal={handleModalState}
                fetchUserAccounts={fetchUserAccounts}
              />
              : modalState === ModalState.UPDATE
              ? <UpdateModal
                handleShowModal={handleModalState}
                fetchUserAccounts={fetchUserAccounts}
              />
              : modalState === ModalState.DELETE
              ? <DeleteModal
                handleShowModal={handleModalState}
                fetchUserAccounts={fetchUserAccounts}
              />
              : ''
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Modal
