import React, {useState} from "react";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileTable from "./component/ProfileTable";
import Footer from "./component/Footer"

export default function App() {
  const [grade, setGrade] = useState<number>(19);
  const [searchWord, setSearchWord] = useState<string>('');
  console.log(grade, searchWord);

  const handleGrade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setGrade(value);
  }

  const handleSearchWord = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSearchWord(value);
  }

  return (
    <div>
      <Header />
      <Toolbar 
        handleGrade={handleGrade}
        handleSearchWord={handleSearchWord}
      />
      <ProfileTable />
      <Footer />
    </div>
  );
}
