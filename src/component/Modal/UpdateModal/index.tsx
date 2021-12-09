import React, {useEffect, useState} from "react";
import {AccountUpdate} from "../../../common/types";
import {Account} from "../../../common/api";

interface UpdateModalProps {
  handleShowModal: (input: string) => void;
}

const UpdateModal = ({handleShowModal}: UpdateModalProps) => {
  const accountInitial = {
    'password': ''
  }

  const [studentID, setStudentID] = useState<string>('');
  const [changeNickname, setChangeNickname] = useState(false);
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [changePosition, setChangePosition] = useState(false);
  const [position, setPosition] = useState<string>('top');
  const [body, setBody] = useState<AccountUpdate>(accountInitial);

  const handleChangeNickname = (e:React.ChangeEvent<HTMLInputElement>) => {
    setChangeNickname(!changeNickname);
  }

  const handleChangePosition = (e:React.ChangeEvent<HTMLInputElement>) => {
    setChangePosition(!changePosition);
  }

  useEffect(() => {
    setBody({
      'password': password,
    })

    if (changeNickname) {
      setBody(body => {
         return {
           ...body,
           'nickname': nickname
         }
      })
    }

    if (changePosition) {
      setBody(body => {
        return {
          ...body,
          'position': position
        }
      })
    }
  }, [password, nickname, position, changeNickname, changePosition])
  
  return (
    <div>
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

      <div>
        <input
          type="checkbox"
          checked={changeNickname}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeNickname(e)}
        />
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
        <input
          type="checkbox"
          checked={changePosition}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangePosition(e)}
        />
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
      <div>
        수정할 정보를 입력하고 체크박스를 클릭해주세요.
      </div>

      <button
        onClick={async () => {
          try {
            await Account.updateAccount(studentID, body);
          } catch(error) {
            console.log(error);
          } finally {
            handleShowModal('null');
          }
        }}
      >
        계정 업데이트
      </button>
    </div>
  )
}

export default UpdateModal