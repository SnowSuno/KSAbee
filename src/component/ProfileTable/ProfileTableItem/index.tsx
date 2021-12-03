import React from "react";
import {AccountType} from "../../../common/types";
import "./style.css"

import top from "../../../img/position/top.png"
import jg from "../../../img/position/jg.png";
import mid from "../../../img/position/mid.png";
import bot from "../../../img/position/bot.png";
import sup from "../../../img/position/sup.png";

type ProfileTableItemProps = {
  account: AccountType;
  key: number;
}

const ProfileTableItem: React.FC<ProfileTableItemProps> = ({account}) => {
  const winRate = (account.wins/(account.wins+account.losses)).toFixed(1);

  const positionImage = (position: String) => {
    if (position === 'top') return <img src={top} />
  }

  return (
    <tr className="profileItem">
      <td className="profileItem__rank">
        account
      </td>
      <td className="profileItem__profile">
        <img className="profileImg" src={account.profile_image} alt="profile image" />
      </td>
      <td>
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
        {
          account.position === 'top' ? <img src={top} />
          : account.position === 'jg' ? <img src={jg} />
          : account.position === 'mid' ? <img src={mid} />
          : account.position === 'bot' ? <img src={bot} />
          : <img src={sup} />
        }
      </td>
    </tr>
  )
}

export default ProfileTableItem