import React, {useEffect, useState} from 'react'
import {AccountCreate} from "../../../common/types";
import {Account} from "../../../common/api";
import "../style.css"

interface RegisterModalProps {
  handleShowModal: (input: string) => void;
}

const RegisterModal = ({handleShowModal}: RegisterModalProps) => {
  // const accountInitial = {
  //   'password': '',
  //   'nickname': '',
  //   'position': ''
  // }

  const [studentID, setStudentID] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [position, setPosition] = useState<string>('top');
  // const [body, setBody] = useState<AccountCreate>(accountInitial);

  // console.log(body);
  // useEffect(() => {
  //   setBody({
  //     'password': password,
  //     'nickname': nickname,
  //     'position': position
  //   })
  // }, [password, nickname, position])

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
            await Account.createAccount(studentID, {password, nickname, position});
          } catch(error) {
            console.log(error);
          } finally {
            handleShowModal('null');

          }
        }}
      >
        등록
      </button>
    </div>
  )
}

export default RegisterModal
