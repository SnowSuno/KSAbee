import React, {useState} from "react";

import {useInput, useSIDInput} from "../../common/hooks";

interface RegisterModalProps {
  closeModal: () => void;

}

function RegisterModal({closeModal}: RegisterModalProps) {
  const {input: studentId} = useSIDInput();
  const {input: password} = useInput("");

  const [qwer, setQwer] = useState<string>("");

  return (
    <>
      <div className="title">계정 등록</div>
      <div className="content">
        <div className="field error">
          <div>
            <p>학번</p>
            <input
              type="text"
              placeholder="학번을 입력하세요"
              {...studentId}
            />
          </div>
          <p>{password.value}</p>
        </div>

        <div className="field">
          <div>
            <p>닉네임</p>
            <input
              type="text"
              placeholder="롤 닉네임을 입력하세요"
            />
          </div>
          <p>{qwer}</p>
        </div>

        <div className="field">
          <div>
            <p>비밀번호</p>
            <input
              type="password"
              // style={}
              placeholder="비밀번호를 입력하세요"
              {...password}
            />
          </div>
          <p>등록한 계정을 수정하거나 삭제할 때 사용됩니다</p>
        </div>

        <div className="field">
          <div>
            <p>포지션</p>
            <select name="" id="">
              <option value="">탑</option>
            </select>
          </div>
        </div>

        <div className="buttons">
          <button onClick={closeModal}>취소</button>
          <button
            className="primary wide"
            onClick={() => setQwer('qwer')}
          >
            등록
          </button>
        </div>
      </div>
    </>
  )
}

export default RegisterModal;
