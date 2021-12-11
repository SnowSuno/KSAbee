import React, {useCallback, useState, useEffect} from "react";

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
  const [filterAccountList, setFilterAccountList] = useState<AccountType[]>([]);
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

  useEffect(() => {
    const result = grade === 'all'
      ? accountList
      : accountList.filter(account => {
        console.log(typeof(grade));
        return account.user.sid.slice(0, 2) === grade
      });
    setFilterAccountList(result);
    console.log(result);
  }, [accountList, grade]);


  const fetchUserAccounts = useCallback(async () => {
    try {
      setShowModal('load');
      const accountList = await Account.getAccounts();
      const modifyAccountList = accountList.map((account) => {
        const matches = account.wins + account.losses;
        const winRate =
          matches === 0
            ? '0'
            : (100*account.wins/(account.wins+account.losses)).toFixed(1);
        return {
          ...account,
          'winRate': winRate
        }
      })
      setAccountList(modifyAccountList);
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
        accountList={filterAccountList}
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
