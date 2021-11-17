import React from "react";
import {AccountType} from "../../../common/types";

type ProfileTableItemProps = {
  account: AccountType;
  key: number;
}

const ProfileTableItem: React.FC<ProfileTableItemProps> = ({account, key}) => {
  return (
    <tr>
      <td>
        account
      </td>
    </tr>
  )
}

export default ProfileTableItem