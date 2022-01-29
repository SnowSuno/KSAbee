import React from "react";
import {CompareKey, SortProps} from "../../common/sort";

// import './ProfileTableHead/style.scss'
// import upImg from "../../img/icons/up.png"
// import downImg from "../../img/icons/down.png"

interface ProfileTableHeadProps {
  sortProps: SortProps;
  handleSortProps: (option: SortProps) => void;
}

const ProfileTableHead = ({sortProps, handleSortProps}: ProfileTableHeadProps) => {
  const handleClick = (key: CompareKey) => () => {
    handleSortProps({
      key, reverse: (key === sortProps.key) && !sortProps.reverse,
    })

    // if (key === sortProps.key) {
    //   handleSortProps({...sortProps, reverse: !sortProps.reverse});
    // } else {
    //   handleSortProps({
    //     key, reverse: false
    //   })
    // }
  }

  const showStatus = (key: CompareKey) => (
    key === sortProps.key
      ? (sortProps.reverse ? "∧" : "∨")
      : null
  )


  return (
    <tr className="head">
      <th className="rank"><p>순위</p></th>
      <th className="profile"><p>프로필</p></th>
      <th
        className="tier clickable"
        onClick={handleClick(CompareKey.TIER)}
      >
        <p>티어 {showStatus(CompareKey.TIER)}</p>
      </th>
      <th
        className="level clickable"
        onClick={handleClick(CompareKey.LEVEL)}
      >
        <p>레벨 {showStatus(CompareKey.LEVEL)}</p>
      </th>
      <th
        className="winrate clickable"
        onClick={handleClick(CompareKey.WINRATE)}
      >
        <p>승률 {showStatus(CompareKey.WINRATE)}</p>
      </th>
      <th className="position"><p>포지션</p></th>
    </tr>
  )
}

export default ProfileTableHead;
