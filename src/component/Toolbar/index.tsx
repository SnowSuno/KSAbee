import React from "react";

import GradeButton from "./gradeButton"
import SearchTextInput from "./searchTextInput"

interface ToolBarProps {
  handleGrade: (input: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchWord: (input: React.ChangeEvent<HTMLInputElement>) => void;
}

function Toolbar({handleGrade, handleSearchWord}: ToolBarProps) {
  return (
    <div>
      <GradeButton handleGrade={handleGrade} />
      <SearchTextInput handleSearchWord={handleSearchWord} />
    </div>
  );
}

export default Toolbar;
