import React from "react";

import upImg from "../../../img/icons/up.png"
import downImg from "../../../img/icons/down.png"

interface ProfileTableHeadProps {
  sort: string;
  handleSort: (input:string) => void;
}

const ProfileTableHead = ({sort, handleSort}: ProfileTableHeadProps) => {
  return (
    <tr>
      <th>
        순위
      </th>
      <th>
        프로필
      </th>
      <th></th>
      <th className="head__tier">
        <span>티어</span>
        <div>
          {sort === 'tier' ?
            <button
              onClick={() => handleSort('tier_reverse')}
            >
              <img src={upImg} alt="오름차순 정렬"/>
            </button>
          :
            <button
              onClick={() => handleSort('tier')}
            >
              <img src={downImg} alt="내림차순 정렬"/>
            </button>
          }
        </div>
      </th>
      <th className="head__level">
        <span>레벨</span>
        <div>
          {sort === 'level' ?
            <button
              onClick={() => handleSort('level_reverse')}
            >
              <img src={upImg} alt="오름차순 정렬"/>
            </button>
            :
            <button
              onClick={() => handleSort('level')}
            >
              <img src={downImg} alt="내림차순 정렬"/>
            </button>
          }
        </div>
      </th>
      <th>
        승률
      </th>
      <th>
        포지션
      </th>
    </tr>
  )
}

export default ProfileTableHead