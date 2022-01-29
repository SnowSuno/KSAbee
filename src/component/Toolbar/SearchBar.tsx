import React from 'react'


interface searchTextInputProps {
  handleSearchWord: (input: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({handleSearchWord}: searchTextInputProps) {
  return (
    <input
      type={"text"}
      onChange={handleSearchWord}
      className={"searchInput"}
      placeholder={"Search"}
    />
  )
}
