import React from 'react'

interface searchTextInputPorps {
  handleSearchWord: (input: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchTextInput({handleSearchWord}: searchTextInputPorps) {
  return (
    <div>
      <input
        type={"text"}
        onChange={handleSearchWord}
        className={"searchInput"} 
        placeholder={"Search"}
      />
    </div>
  )
}
