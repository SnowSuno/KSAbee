import React, {useState} from 'react'
import {Account} from "../../../common/api";
import "../style.css"

interface RegisterModalProps {
  handleShowModal: (input: string) => void;
  fetchUserAccounts: () => Promise<void>
}

const RegisterModal = ({handleShowModal, fetchUserAccounts}: RegisterModalProps) => {
  const [studentID, setStudentID] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [position, setPosition] = useState<string>('top');

  return (
    <div className="register modal">
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
        <span>롤 닉네임</span>
        <input
          type="text"
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setNickname(e.currentTarget.value)
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

      <div>
        <span>포지션</span>
        <select
          onChange={
            (e: React.ChangeEvent<HTMLSelectElement>) =>
              setPosition(e.currentTarget.value)
          }
        >
          <option value="top">탑</option>
          <option value="jg">정글</option>
          <option value="mid">미드</option>
          <option value="bot">원딜</option>
          <option value="sup">서폿</option>
        </select>
      </div>

      <button
        onClick={async () => {
          try {
            handleShowModal('load');
            await Account.createAccount(studentID, {password, nickname, position});
            await fetchUserAccounts();
            alert('계정을 추가하였습니다.')
          } catch(error) {
            // console.log(error.response.status);
            console.log(error);
            alert('계정추가에 실패하였습니다.')
          } finally {
            handleShowModal('null');
          }
        }}
      >
        계정 등록
      </button>
    </div>
  )
}

export default RegisterModal
