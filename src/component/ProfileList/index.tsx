import React, {useState, useEffect} from "react";

import { AccountType } from "../../common/types";
import { Account } from "../../common/api";

function ProfileList() {
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
      ddd
    </div>
  );
}

export default ProfileList;
