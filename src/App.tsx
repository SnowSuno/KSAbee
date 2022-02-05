import React, {useCallback, useState} from "react";
import "./App.css";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileTable from "./component/ProfileTable";
import Footer from "./component/Footer"
import Modal, {ModalState} from "./component/Modal";

import {AccountType} from "./common/types";
import {Account} from "./common/api";

import {compare, CompareKey, SortProps} from "./common/sort";
import {filter, FilterProps} from "./common/filter";

export default function App() {
  const [accountList, setAccountList] = useState<AccountType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [sortProps, setSortProps] = useState<SortProps>({
    key: CompareKey.TIER,
    reverse: false,
  });

  const [filterProps, setFilterProps] = useState<FilterProps>({
    search: "",
    grade: "",
    position: "",
  });

  const [modalState, setModalState] = useState<ModalState | null>(null);


  const handleSortProps = (options: SortProps) => {
    setSortProps(options);
  }

  const handleFilterProps = (options: FilterProps) => {
    setFilterProps(options);
  }

  const handleModalState = (state: ModalState | null) => {
    setModalState(state);
  }

  const fetchUserAccounts = useCallback(async () => {
    try {
      setLoading(true);
      const accountList = await Account.getAccounts();
      setAccountList(accountList);
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
      // setModalState(null);
    }
  }, []);

  return <>
    <header>
      <Header/>
    </header>

    <section>
      <Toolbar
        filterProps={filterProps}
        handleFilterProps={handleFilterProps}
        handleModalState={handleModalState}
      />
      <ProfileTable
        accountList={
          accountList
            .filter(filter(filterProps))
            .sort(compare(sortProps))
        }
        loading={loading}
        fetchUserAccounts={fetchUserAccounts}
        sortProps={sortProps}
        handleSortProps={handleSortProps}
      />
    </section>

    <footer>
      <Footer/>
    </footer>

    <Modal
      modalState={modalState}
      handleModalState={handleModalState}
      fetchUserAccounts={fetchUserAccounts}
    />
  </>;
}
