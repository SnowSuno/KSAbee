import React from "react";
import {AccountType} from "../../common/types";
// import "./ProfileTableItem/style.scss"

import top from "../../img/position/top.png"
import jg from "../../img/position/jg.png";
import mid from "../../img/position/mid.png";
import bot from "../../img/position/bot.png";
import sup from "../../img/position/sup.png";

type ProfileTableItemProps = {
  index: number
  account: AccountType;
}

const ProfileTableItem: React.FC<ProfileTableItemProps> = ({account, index}) => {
  return (
    <tr
      onClick={() => window.open(`https://www.op.gg/summoner/userName=${account.nickname}`)}
    >
      <td className="rank">
        <p className="light big">{index + 1}</p>
      </td>

      <td className="profile">
        <img src={account.profile_image} alt="profile img"/>
        <div>
          <p className="dark extra">{account.nickname}</p>
          <p className="light small">{account.user.sid} {account.user.name}</p>
        </div>
      </td>

      <td className="tier">
        <p className="dark big">{account.tier}</p>
        <p className="light small">{account.league_points}LP</p>
      </td>

      <td className="level">
        <span className="light medium">Lv </span>
        <span className="dark big">{account.level}</span>
      </td>

      <td className="winrate">
        <p>
          <span className="dark big">{account.win_rate}</span>
          <span className="light medium"> %</span>
        </p>
        <p className="light small">{account.wins} / {account.wins + account.losses}</p>
      </td>

      <td className="position">
        <img src={icons[account.position]} alt={`${account.position} img`}/>
      </td>
    </tr>
    // <div className="item">
    //   <hr/>
    //   <a
    //     href={`https://www.op.gg/summoner/userName=${account.nickname}`}
    //     target='_blank'
    //   >
    //
    //   </a>
    // </div>
  );
}

const icons = {
  top, jg, mid, bot, sup
};

export default ProfileTableItem
