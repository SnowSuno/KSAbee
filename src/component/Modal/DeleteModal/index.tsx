import React, {useState} from "react";
import {Account} from "../../../common/api";

interface DeleteModalProps {
  handleShowModal: (input: string) => void;
}

const DeleteModal = ({handleShowModal}: DeleteModalProps) => {
  const [studentID, setStudentID] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  console.log(studentID, password);

  return (
    <div>
      Delete Modal
      <div>
        <span>학번</span>
        <input
          type="text"
          placeholder="19-000"
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setStudentID(e.currentTarget.value)
          }
        />
      </div>

      <div>
        <span>비밀번호</span>
        <input
          type="password"
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
          }
        />
      </div>

      <button
        onClick={async () => {
          try {
            await Account.deleteAccount(studentID, {password});
          } catch(error) {
            console.log(error);
          } finally {
            handleShowModal('null');
          }
        }}
      >
        계정 삭제
      </button>
    </div>
  )
}

export default DeleteModal
