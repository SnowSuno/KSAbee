import React, {useEffect} from "react";

import ProfileTableHead from './ProfileTableHead'
import ProfileTableItem from "./ProfileTableItem";
import './style.css'

import { AccountType } from "../../common/types";

interface ProfileTableProps {
  accountList: AccountType[];
  loading: boolean;
  fetchUserAccounts: () => Promise<void>
  sort: string;
  handleSort: (input: string) => void;
}
function ProfileTable({accountList, loading, fetchUserAccounts, sort, handleSort}: ProfileTableProps) {
  useEffect(() => {
    fetchUserAccounts();
  }, [fetchUserAccounts])

  return (
    <table className="profileTable">
      <thead>
        <ProfileTableHead
          sort={sort}
          handleSort={handleSort}
        />
      </thead>
      <tbody>
        {accountList !== undefined &&
        accountList.map(
          (data: AccountType) =>
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
