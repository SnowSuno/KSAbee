import React, {useState} from "react";
import {Account} from "../../../common/api";

interface DeleteModalProps {
  handleShowModal: (input: string) => void;
  fetchUserAccounts: () => Promise<void>;
}

const DeleteModal = ({handleShowModal, fetchUserAccounts}: DeleteModalProps) => {
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
            handleShowModal('load');
            await Account.deleteAccount(studentID, {password});
            await fetchUserAccounts();
            alert('게정을 삭제하였습니다.')
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
