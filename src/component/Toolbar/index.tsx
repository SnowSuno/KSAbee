import React, {ChangeEvent} from "react";
import SearchBar from "./SearchBar"

import Dropdown from "./Dropdown";

import './style.scss'
import {ModalState} from "../Modal";
import {FilterProps, Grade, Position} from "../../common/filter";

interface ToolBarProps {
  filterProps: FilterProps;
  handleFilterProps: (options: FilterProps) => void;
  handleModalState: (state: ModalState) => void;
}

function Toolbar({filterProps, handleFilterProps, handleModalState}: ToolBarProps) {
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
        <button
          onClick={() => handleModalState(ModalState.UPDATE)}
        >
          수정
        </button>
        {/*<button*/}
        {/*  onClick={() => handleModalState(ModalState.DELETE)}*/}
        {/*>*/}
        {/*  삭제*/}
        {/*</button>*/}
        <button
          onClick={() => handleModalState(ModalState.REGISTER)}
          className="primary"
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
