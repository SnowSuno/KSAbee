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
    <div className="profileItem">
      <div className="rank">
        {account.index}
      </div>
      <div className="profile">
        <img className="profile__img" src={account.profile_image} alt="profile img" />
      </div>
      <div className="user">
        <p className="user__nick">{account.nickname}</p>
        <p className="user__name">{account.user.sid} {account.user.name}</p>
      </div>
      <div className="tier">
        <p className="tier__rank">{account.tier}</p>
        <p className="tier__lp">{account.league_points}LP</p>
      </div>
      <div className="level">
        <span>Lv. </span>
        <span>{account.level}</span>
      </div>
      <div className="gameInfo">
        <p className="winRate">{account.win_rate}%</p>
        <p className="matches">{account.wins}/{account.losses}</p>
      </div>
      <div className="position">
        {
          account.position === 'top' ? <img src={top} alt="top img" />
          : account.position === 'jg' ? <img src={jg} alt="jg img" />
          : account.position === 'mid' ? <img src={mid} alt="mid img" />
          : account.position === 'bot' ? <img src={bot} alt="bot img" />
          : <img src={sup} alt="sup img" />
        }
      </div>
    </div>
  )
}

export default ProfileTableItem