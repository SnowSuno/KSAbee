import React from "react";

import RegisterModal from "./RegisterModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

import './style.css'

interface ModalProps {
  showModal : string;
  handleShowModal: (input: string) => void;
  fetchUserAccounts: () => Promise<void>;
}

const Modal = ({showModal, handleShowModal, fetchUserAccounts}: ModalProps) => {
  return (
      <div className={showModal === 'null' ? 'modal__null' : 'modal__background'}>
        <div className="center">
          {showModal === 'load'
            ? <div className="loader">
            </div>
            : ''
          }
          <div className="modal">
            {showModal === 'load' || showModal === 'null' ? '' :
              <div className="modal__header">
                <span>
                  {
                    showModal === 'register' ? '계정등록'
                  : showModal === 'update' ? '계정 업데이트'
                  : showModal === 'delete' ? '계정삭제' : ''
                  }
                </span>
                <button onClick={() => handleShowModal('null')}>X</button>
              </div>
            }
            {showModal === 'register'
              ? <RegisterModal
                handleShowModal={handleShowModal}
                fetchUserAccounts={fetchUserAccounts}
              />
              : showModal === 'update'
              ? <UpdateModal
                  handleShowModal={handleShowModal}
                  fetchUserAccounts={fetchUserAccounts}
                />
              : showModal === 'delete'
              ? <DeleteModal
                  handleShowModal={handleShowModal}
                  fetchUserAccounts={fetchUserAccounts}
                />
              : ''
            }
          </div>
        </div>
      </div>
  )
}

export default Modal