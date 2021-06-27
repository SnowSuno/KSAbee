import React, { useState } from "react";
import Header from './component/Header.js';
import SearchBar from './component/SearchBar.js';
import SelectCategory from "./component/SelectCategory.js";
import ProfileItemList from './component/ProfileItemList';

export default function App() {
  const [selectLine, setSelectLine] = useState("all");
  const [selectBatch, setSelectBatch] = useState("all");
  console.log("select line : ", selectLine);

  const handleSelectLine = (line) => {
    console.log(line);
    setSelectLine(line);
  }

  const handleSelectBatch = (batch) => {
    setSelectBatch(batch);
  }

  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <SelectCategory
        selectLine = {selectLine}
        selectBatch = {selectBatch}
        onSelectLine={handleSelectLine}
        onSelectBatch={handleSelectBatch}
      />
      <ProfileItemList
        selectLine = {selectLine}
        selectBatch = {selectBatch}
      />
  </div>
  )
}