import React, {useEffect, useState} from "react";
import { Account } from "./common/api";
import { AccountType } from "./common/types";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileList from "./component/ProfileList";


export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [accountList, setAccountList] = useState<AccountType[]>([]);
  console.log(loading, accountList);
  // const [sort, setSort] = useState({
  //     key: 'tier',
  //     reverse: false,
  // });

  useEffect(() => {
    async function fetchApi() {
      try {
        const userAccountList = await Account.getAccounts();
        setAccountList(userAccountList);
      } catch (e){
        console.log(e)
      } finally {
        setLoading(false);
      }
    }
    fetchApi();
  }, [])

  return (
    <div>
      <Header />
      <Toolbar />
      <ProfileList />
    </div>
  );
}
