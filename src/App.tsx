import React, {useState} from "react";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileTable from "./component/ProfileTable";
import Footer from "./component/Footer"
import RegisterModal from "./component/Modal/RegisterModal"
import UpdateModal from "./component/Modal/UpdateModal";
import DeleteModal from "./component/Modal/DeleteModal";

export default function App() {
  const [grade, setGrade] = useState<number>(19);
  const [searchWord, setSearchWord] = useState<string>('');
  const [showModal, setShowModal] = useState<Boolean>(false);
  
  console.log(grade, searchWord, showModal);

  const handleGrade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setGrade(value);
  }

  const handleSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchWord(value);
  }

  const handleShowModal = () => {
    setShowModal(!showModal);
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
      <RegisterModal />
      <UpdateModal/>
      <DeleteModal/>
    </div>
  );
}
