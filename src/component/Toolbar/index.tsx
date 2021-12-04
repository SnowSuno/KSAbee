import React from "react";

import GradeButton from "./gradeButton"


function Toolbar() {
  return (
    <div>
      <GradeButton/>
      
      <input
        type={"text"}
        className={"searchInput"} 
        placeholder={"Search"}
      />
    </div>
  );
}

export default Toolbar;
