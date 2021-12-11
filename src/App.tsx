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
  const [showModal, setShowModal] = useState<string>('null');
  const [sort, setSort] = useState('tier');
  const [grade, setGrade] = useState<string>('all');
  const [searchWord, setSearchWord] = useState<string>('');

  console.log(sort, grade, searchWord, showModal);

  const handleGrade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(event.target.value);
  }

  const handlePosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(event.target.value);
  }

  const handleSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchWord(value);
  }

  const handleShowModal = (modalName: string) => {
    setShowModal(modalName);
  }

  const handleSort = (sortStandard: string) => {
    setSort(sortStandard);
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
        handlePosition={handlePosition}
        handleSearchWord={handleSearchWord}
        handleShowModal ={handleShowModal}
      />
      <ProfileTable
        accountList={accountList}
        loading={loading}
        fetchUserAccounts={fetchUserAccounts}
        sort={sort}
        handleSort={handleSort}
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
