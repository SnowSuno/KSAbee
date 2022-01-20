import React, {useEffect} from "react";
import "./style.scss";

import ProfileTableHead from './ProfileTableHead'
import ProfileTableItem from "./ProfileTableItem";

import {AccountType} from "../../common/types";
import {SortProps} from "../../common/sort";

interface ProfileTableProps {
  accountList: AccountType[];
  loading: boolean;
  fetchUserAccounts: () => Promise<void>
  sortProps: SortProps;
  handleSortProps: (option: SortProps) => void;
}

function ProfileTable(
  {accountList, loading, fetchUserAccounts, sortProps, handleSortProps}: ProfileTableProps
) {
  useEffect(() => {
    fetchUserAccounts().then();
  }, [fetchUserAccounts])

  return (
    <table className="profileTable">
      <thead>
      <ProfileTableHead
        sortProps={sortProps}
        handleSortProps={handleSortProps}
      />
      </thead>
      <tbody>
      {accountList.map(
        (data: AccountType, index) =>
          <ProfileTableItem
            index={index}
            account={data}
            key={data.summoner_id}
          />
      )}
      </tbody>
      {/*<div className="items">*/}
      {/*  */}
      {/*</div>*/}
    </table>
  );
}

export default ProfileTable;
