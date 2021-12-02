import React from "react";
import {AccountType} from "../../../common/types";
import "./style.css"
import jg from "../../../img/position/jg.png";

type ProfileTableItemProps = {
  account: AccountType;
  key: number;
}

const ProfileTableItem: React.FC<ProfileTableItemProps> = ({account}) => {
  const winRate = (account.wins/(account.wins+account.losses)).toFixed(1);
  return (
    <tr className="profileItem">
      <td className="profileItem__rank">
        account
      </td>
      <td className="profileItem__profile">
        <img className="profileImg" src={account.profile_image} alt="profile image" />
        {account.user.sid} {account.user.name}
      </td>
      <td>
        {account.tier}
      </td>
      <td>
        {account.level}
      </td>
      <td>
        {winRate}%
        {account.wins}/{account.losses}
      </td>
      <td>
        <img src={require('../../../img/position/bot.png')} />
        {account.position}
      </td>
    </tr>
  )
}

export default ProfileTableItem