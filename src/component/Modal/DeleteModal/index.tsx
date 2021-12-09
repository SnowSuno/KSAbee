import React, {useEffect, useState} from "react";
import {Account} from "../../../common/api";
import {AccountDelete} from "../../../common/types";

interface DeleteModalProps {
  handleShowModal: (input: string) => void;
}

const DeleteModal = ({handleShowModal}: DeleteModalProps) => {
  const initialBody = {
    'password': ''
  };

  const [studentID, setStudentID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [body, setBody] = useState<AccountDelete>(initialBody);

  console.log(studentID, password);
  console.log(body)
  useEffect(() => {
    setBody({
      'password': password
    })
  }, [password]);

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
            await Account.deleteAccount(studentID, body);
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