import React, {useCallback, useEffect, useState} from "react";
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
  const [loading, setLoading] = useState<boolean>(true);
  const [accountList, setAccountList] = useState<AccountType[]>([]);

  const [sortProps, setSortProps] = useState<SortProps>({
    key: CompareKey.TIER,
    reverse: false,
  });

  const [filterProps, setFilterProps] = useState<FilterProps>({
    search: "",
    grade: "",
    position: "",
  });

  const [modalstate, setModalstate] = useState<ModalState | null>(null);

  const handleSortProps = (options: SortProps) => {
    setSortProps(options);
  }

  const handleFilterProps = (options: FilterProps) => {
    setFilterProps(options);
  }

  const handleModalState = (state: ModalState | null) => {
    setModalstate(state);
  }

  const fetchUserAccounts = useCallback(async () => {
    try {
      const accountList = await Account.getAccounts();
      setAccountList(accountList);
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }, []);

  return (<>
    <header>
      <Header/>
    </header>

    <section>
      <Toolbar
        filterProps={filterProps}
        handleFilterProps={handleFilterProps}
        handleModalstate={handleModalState}
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
      modalState={modalstate}
      handleModalState={handleModalState}
      fetchUserAccounts={fetchUserAccounts}
    />
  </>);
}
