import React, {useCallback, useState} from "react";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileTable from "./component/ProfileTable";
import Footer from "./component/Footer"
import Modal from "./component/Modal";
import {AccountType} from "./common/types";
import {Account} from "./common/api";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [accountList, setAccountList] = useState<AccountType[]>([]);
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

  const fetchUserAccounts = useCallback(async () => {
    try {
      setShowModal('load');
      const userAccountList = await Account.getAccounts();
      setAccountList(userAccountList);
    } catch (e){
      console.log(e)
    } finally {
      setShowModal('null');
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <Header />
      <Toolbar 
        handleGrade={handleGrade}
        handleSearchWord={handleSearchWord}
        handleShowModal ={handleShowModal}
      />
      <button
        onClick={() => handleShowModal('load')}
      >
        로딩
      </button>

      <ProfileTable
        accountList={accountList}
        loading={loading}
        fetchUserAccounts={fetchUserAccounts}
      />
      <Footer />
      <Modal
        showModal={showModal}
        handleShowModal={handleShowModal}
        fetchUserAccounts={fetchUserAccounts}
      />
    </div>
  );
}
