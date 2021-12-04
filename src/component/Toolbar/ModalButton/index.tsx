import React from 'react'

interface ModalButtonProps {
  handleShowModal: () => void;
}

export default function ModalButton({handleShowModal}: ModalButtonProps) {
  return (
    <div>
      <button onClick={handleShowModal}>
        등록
      </button>
    </div>
  )
}
