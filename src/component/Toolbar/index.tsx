import React, {ChangeEvent} from "react";
import SearchBar from "./SearchBar"

import Dropdown from "./Dropdown";

import './style.scss'
import {ModalState} from "../Modal";
import {FilterProps, Grade, Position} from "../../common/filter";

interface ToolBarProps {
  filterProps: FilterProps;
  handleFilterProps: (options: FilterProps) => void;
  handleModalstate: (state: ModalState) => void;
}

function Toolbar({filterProps, handleFilterProps, handleModalstate}: ToolBarProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    handleFilterProps({...filterProps, search: event.target.value});
  }

  const handleGrade = (value: keyof typeof Grade) => {
    handleFilterProps({...filterProps, grade: value});
  }

  const handlePosition = (value: keyof typeof Position) => {
    handleFilterProps({...filterProps, position: value});
  }


  return (
    <div className="toolBar">
      <SearchBar handleSearchWord={handleSearch} />
      <div className="tab">
        <Dropdown
          values={Grade}
          handle={handleGrade}
        />
        <Dropdown
          values={Position}
          handle={handlePosition}
        />
        <button onClick={() => handleModalstate(ModalState.UPDATE)}>수정</button>
        <button
          onClick={() => handleModalstate(ModalState.REGISTER)}
          className="primary"
        >
          등록
        </button>
        {/*<button onClick={() => handleModalstate(ModalState.DELETE)}>계정 삭제</button>*/}
      </div>
    </div>
  );
}

export default Toolbar;
