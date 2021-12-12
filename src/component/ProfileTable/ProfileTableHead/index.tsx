import React from "react";

import './style.css'
import upImg from "../../../img/icons/up.png"
import downImg from "../../../img/icons/down.png"

interface ProfileTableHeadProps {
  sort: string;
  handleSort: (input:string) => void;
}

const ProfileTableHead = ({sort, handleSort}: ProfileTableHeadProps) => {
  return (
    <tr>
      <th className="head__rank">
        순위
      </th>
      <th className="head__profile">
        프로필
      </th>
      <th className="head__user">
      </th>
      <th className="head__tier">
        <span>티어</span>
        <div>
          <button
            onClick={() => handleSort('tier')}
            className={sort==='tier' ? 'active' : ''}
          >
            <img src={upImg} alt="오름차순 정렬"/>
          </button>
          <button
            onClick={() => handleSort('tier_reverse')}
            className={sort==='tier_reverse' ? 'active' : ''}
          >
            <img src={downImg} alt="내림차순 정렬"/>
          </button>
        </div>
      </th>
      <th className="head__level">
        <span>레벨</span>
        <div>
          <button
            onClick={() => handleSort('level')}
            className={sort==='level' ? 'active' : ''}
          >
            <img src={upImg} alt="오름차순 정렬"/>
          </button>
          <button
            onClick={() => handleSort('level_reverse')}
            className={sort==='level_reverse' ? 'active' : ''}
          >
            <img src={downImg} alt="내림차순 정렬"/>
          </button>
        </div>
      </th>
      <th className="head__gameInfo">
        <span>승률</span>
        <div>
          <button
            onClick={() => handleSort('winRate')}
            className={sort==='winRate' ? 'active' : ''}
          >
            <img src={upImg} alt="오름차순 정렬"/>
          </button>
          <button
            onClick={() => handleSort('winRate_reverse')}
            className={sort==='winRate_reverse' ? 'active' : ''}
          >
            <img src={downImg} alt="내림차순 정렬"/>
          </button>
        </div>
      </th>
      <th className="head__position">
        포지션
      </th>
    </tr>
  )
}

export default ProfileTableHead