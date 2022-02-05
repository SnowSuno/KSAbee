import React from "react";

import {useInput} from "../../common/hooks";

function RegisterModal() {
  const {input: studentId} = useInput("");

  return (
    <>
      <div className="title">계정 등록</div>
      <div className="content">
        <div>
          <p>학번</p>
          <input
            type="text"
            placeholder="학번을 입력하세요"
            {...studentId}
          />
        </div>

        <div>
          <p>닉네임</p>
          <input
            type="text"
            placeholder="롤 닉네임을 입력하세요"
          />
        </div>
        <p></p>

        <div>
          <p>비밀번호</p>
          <input
            type="text"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <p>등록한 계정을 수정하거나 삭제할 때 사용됩니다</p>

        <div>
          <p>포지션</p>
          <select name="" id=""></select>
        </div>

        <div className="buttons">
          <button>취소</button>
          <button
            className="primary wide"
          >
            등록
          </button>
        </div>
      </div>
    </>
  )
}

export default RegisterModal;
