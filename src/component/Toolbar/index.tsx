import React from "react";

import GradeButton from "./gradeButton"

interface ToolBarProps {
  handleGrade: (input: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchWord: (input: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Toolbar({handleGrade, handleSearchWord}: ToolBarProps) {
  return (
    <div>
      <GradeButton
        handleGrade={handleGrade}
      />
      
      <input
        type={"text"}
        className={"searchInput"} 
        placeholder={"Search"}
      />
    </div>
  );
}

export default Toolbar;
