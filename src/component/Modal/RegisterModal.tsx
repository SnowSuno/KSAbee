import React from "react";

import {useInput} from "../../common/hooks";

function RegisterModal() {
  const {input: studentId} = useInput("");

  return (
    <div className="modal">
      <p>계정 등록</p>
      <input type="text" {...studentId} />

    </div>
  )
}

export default RegisterModal;
