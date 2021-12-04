import React from 'react'

import "../style.css"

const RegisterModal = () => {
  return (
    <div className="register modal">
      <div>
        <span>학번</span>
        <input 
          type="text"
          placeholder="19-000"
        />
      </div>

      <div>
        <span>비밀번호</span>
        <input type="password" />
      </div>

      <div>
        <span>포지션</span>
        <select>
          <option value="top">탑</option>
          <option value="jg">정글</option>
          <option value="mid">미드</option>
          <option value="bot">원딜</option>
          <option value="sup">서폿</option>
        </select>
      </div>

      <button>
        등록
      </button>
    </div>
  )
}

export default RegisterModal