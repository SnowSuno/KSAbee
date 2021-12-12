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
  const [position, setPosition] = useState<string>('all');
  const [searchWord, setSearchWord] = useState<string>('');

  console.log(sort, grade, position, searchWord);
  console.log(accountList);

  const handleGrade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(event.target.value);
  }

  const handlePosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(event.target.value);
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
    if (sort === 'tier') {
      accountList.sort(function (a: AccountType, b: AccountType) {
        return b.lp_key - a.lp_key;
      })
    } else if (sort === 'tier_reverse') {
      accountList.sort(function (a: AccountType, b: AccountType) {
        return a.lp_key - b.lp_key;
      })
    } else if (sort === 'level') {
      accountList.sort(function (a: AccountType, b: AccountType) {
        return b.level - a.level;
      })
    } else if (sort === 'level_reverse') {
      accountList.sort(function (a:AccountType, b: AccountType) {
        return a.level - b.level;
      })
    } else if (sort === 'winRate') {
      accountList.sort(function (a: AccountType, b: AccountType) {
        return b.win_rate - a.win_rate;
      })
    } else if (sort === 'winRate_reverse') {
      accountList.sort(function (a: AccountType, b: AccountType) {
        return a.win_rate - b.win_rate;
      })
    }



    const gradeResult = grade === 'all'
      ? accountList
      : accountList.filter(account => account.user.sid.slice(0, 2) === grade);

    const positionResult = position === 'all'
      ? gradeResult
      : gradeResult.filter(account => account.position === position);

    const wordResult = positionResult.filter(account => {
      const data = account.user.name + account.user.sid + account.position + account.level + account.nickname;
      return data.includes(searchWord);
    });

    setFilterAccountList(wordResult);
  }, [accountList, sort, grade, position, searchWord]);


  const fetchUserAccounts = useCallback(async () => {
    try {
      setShowModal('load');
      const accountList = await Account.getAccounts();
      setAccountList(accountList);
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
