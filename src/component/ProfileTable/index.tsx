import React, {useState, useEffect, useCallback} from "react";

import ProfileTableHead from './ProfileTableHead'
import ProfileTableItem from "./ProfileTableItem";
import './style.css'

import { AccountType } from "../../common/types";
import { Account } from "../../common/api";

function ProfileTable() {
  const [loading, setLoading] = useState<boolean>(true);
  const [accountList, setAccountList] = useState<AccountType[]>([]);
  console.log(loading, accountList);
  // const [sort, setSort] = useState({
  //     key: 'tier',
  //     reverse: false,
  // });

  const fetchApi = useCallback(async () => {
    try {
      const userAccountList = await Account.getAccounts();
      setAccountList(userAccountList);
    } catch (e){
      console.log(e)
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApi();
  }, [fetchApi])

  return (
    <table className="profileTable">
      <thead>
        <ProfileTableHead />
      </thead>
      <tbody>
        {accountList !== undefined &&
        accountList.map(
          (data) =>
            <ProfileTableItem
              account={data}
              key={data.summoner_id}
            />

        )}
      </tbody>
    </table>
  );
}

export default ProfileTable;
