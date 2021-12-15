import React from 'react'

import './style.css'

interface searchTextInputProps {
  handleSearchWord: (input: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchTextInput({handleSearchWord}: searchTextInputProps) {
  return (
    <input
      type={"text"}
      onChange={handleSearchWord}
      className={"searchInput"}
      placeholder={"Search"}
    />
  )
}
