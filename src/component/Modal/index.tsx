import React from "react";

import RegisterModal from "./RegisterModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

interface ModalProps {
  showModal : string;
  handleShowModal: (input: string) => void;
  fetchUserAccounts: () => Promise<void>;
}

const Modal = ({showModal, handleShowModal, fetchUserAccounts}: ModalProps) => {
  return (
      <div className={showModal === 'null' ? '' : 'background'}>
        <div className="center">
          {showModal === 'load'
            ? <div className="loader">
            </div>
            : ''
          }
          <div className="modal">
            {showModal === 'load' || showModal === 'null' ? '' :
              <div>
                <button onClick={() => handleShowModal('null')}>x</button>
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