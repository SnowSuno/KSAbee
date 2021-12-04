import React from "react";

import GradeButton from "./gradeButton"
import SearchTextInput from "./searchTextInput"
import ModalButton from "./ModalButton"

interface ToolBarProps {
  handleGrade: (input: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchWord: (input: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowModal: () => void;
}

function Toolbar({handleGrade, handleSearchWord, handleShowModal}: ToolBarProps) {
  return (
    <div>
      <GradeButton handleGrade={handleGrade} />
      <SearchTextInput handleSearchWord={handleSearchWord} />
      <ModalButton handleShowModal={handleShowModal} />
    </div>
  );
}

export default Toolbar;
