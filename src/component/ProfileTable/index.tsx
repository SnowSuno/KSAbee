import React, {useEffect} from "react";

import ProfileTableHead from './ProfileTableHead'
import ProfileTableItem from "./ProfileTableItem";
import './style.css'

import { AccountType } from "../../common/types";

interface ProfileTableProps {
  accountList: AccountType[];
  loading: boolean;
  fetchUserAccounts: () => Promise<void>
}
function ProfileTable({accountList, loading, fetchUserAccounts}: ProfileTableProps) {
  console.log(loading, accountList);
  // const [sort, setSort] = useState({
  //     key: 'tier',
  //     reverse: false,
  // });



  useEffect(() => {
    fetchUserAccounts();
  }, [fetchUserAccounts])

  return (
    <table className="profileTable">
      <thead>
        <ProfileTableHead />
      </thead>
      <tbody>
        {accountList !== undefined &&
        accountList.map(
          (data, index) =>
            <ProfileTableItem
              account={data}
              index={index+1}
              key={data.summoner_id}
            />

        )}
      </tbody>
    </table>
  );
}

export default ProfileTable;
