import React from "react";

import GradeButton from "./gradeButton"
import SearchTextInput from "./searchTextInput"
import PositionButton from "./positionButton";

import './style.css'

interface ToolBarProps {
  handleGrade: (input: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePosition: (input: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchWord: (input: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowModal: (input: string) => void;
}

function Toolbar({handleGrade, handlePosition, handleSearchWord, handleShowModal}: ToolBarProps) {
  return (
    <div className="toolBar">
      <SearchTextInput handleSearchWord={handleSearchWord} />
      <div>
        <GradeButton handleGrade={handleGrade} />
        <PositionButton handlePosition={handlePosition} />
        <button onClick={() => handleShowModal('register')}>등록</button>
        <button onClick={() => handleShowModal('update')}>계정 수정</button>
        <button onClick={() => handleShowModal('delete')}>계정 삭제</button>
      </div>
    </div>
  );
}

export default Toolbar;
