import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './component/Header.js';
import SearchBar from './component/SearchBar.js';
import SelectCategory from "./component/SelectCategory.js";
import ProfileItemList from './component/ProfileItemList';

export default function App() {
  const [selectLine, setSelectLine] = useState('All');
  const [selectBatch, setSelectBatch] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState();

  const handleSelectLine = (line) => {
    setSelectLine(line);
  }

  const handleSelectBatch = (batch) => {
    setSelectBatch(batch);
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    axios.get('https://apiservice-ksabee.herokuapp.com/users')
    .then(
      (res) => 
      setData(res.data));    
    console.log(data);
  }, []);

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
  </div>
  )
}