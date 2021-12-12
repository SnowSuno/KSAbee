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
  return (
    <tr className="profileItem">
      <td className="rank">
        {account.index}
      </td>
      <td className="profile">
        <img className="profile__img" src={account.profile_image} alt="profile img" />
      </td>
      <td className="user">
        <p>{account.nickname}</p>
        <p>{account.user.sid} {account.user.name}</p>
      </td>
      <td className="tier">
        <p>{account.tier}</p>
        <p>{account.league_points}LP</p>
      </td>
      <td className="level">
        Lv. {account.level}
      </td>
      <td className="gameInfo">
        <p className="winRate">{account.win_rate}%</p>
        <p className="matches">{account.wins}/{account.losses}</p>
      </td>
      <td className="position">
        {
          account.position === 'top' ? <img src={top} alt="top img" />
          : account.position === 'jg' ? <img src={jg} alt="jg img" />
          : account.position === 'mid' ? <img src={mid} alt="mid img" />
          : account.position === 'bot' ? <img src={bot} alt="bot img" />
          : <img src={sup} alt="sup img" />
        }
      </td>
    </tr>
  )
}

export default ProfileTableItem