import React, { useState } from "react";
import Header from './component/Header.js';
import SearchBar from './component/SearchBar.js';
import SelectCategory from "./component/SelectCategory.js";
import ProfileItemList from './component/ProfileItemList';
import Footer from './component/Footer.js';
import useGetApi from './api/useGetApi.js'

export default function App() {
  const [selectLine, setSelectLine] = useState('All');
  const [selectBatch, setSelectBatch] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const {data, loading, error} = useGetApi();

  if (!loading) {
    if (!error) {
      // console.log(data);
    } else {
      console.error(error);
    }
  }

  const handleSelectLine = (line) => {
    setSelectLine(line);
  }

  const handleSelectBatch = (batch) => {
    setSelectBatch(batch);
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <Header/>
      <SearchBar
        value={searchTerm}
        onChange={handleChange}
      />
      <SelectCategory
        selectLine = {selectLine}
        selectBatch = {selectBatch}
        onSelectLine={handleSelectLine}
        onSelectBatch={handleSelectBatch}
      />
      <ProfileItemList
        data = {data}
        selectLine = {selectLine}
        selectBatch = {selectBatch}
        searchTerm = {searchTerm}
      />
      <Footer/>
  </div>
  )
}