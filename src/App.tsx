import React, {useState} from "react";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileTable from "./component/ProfileTable";
import Footer from "./component/Footer"
import Modal from "./component/Modal";

export default function App() {
  const [grade, setGrade] = useState<number>(19);
  const [searchWord, setSearchWord] = useState<string>('');
  const [showModal, setShowModal] = useState<string>('null');
  
  console.log(grade, searchWord, showModal);

  const handleGrade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setGrade(value);
  }

  const handleSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchWord(value);
  }

  const handleShowModal = (modalName: string) => {
    setShowModal(modalName);
  }

  return (
    <div>
      <Header />
      <Toolbar 
        handleGrade={handleGrade}
        handleSearchWord={handleSearchWord}
        handleShowModal={handleShowModal}
      />
      <ProfileTable />
      <Footer />
      <Modal
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
    </div>
  );
}
