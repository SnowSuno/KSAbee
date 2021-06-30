import React from 'react'
import ProfileItem from './ProfileItem'
import './ProfileItemList.css'

const ProfileItemList = ({data, selectLine, selectBatch, searchTerm}) => {
  const profileFilter = (userInfo) => {
    var result = userInfo.filter(info =>
      info['nickName'].includes(searchTerm) ||
      info['studentID'].includes(searchTerm) ||
      info['tier'].includes(searchTerm) ||
      String(info['level']).includes(searchTerm)
    );

    if (selectLine !== 'All') {
      result = result.filter(userInfo =>
        userInfo['position'] === selectLine
      );
    }
    
    if (selectBatch !== 'All') {
      result = result.filter(userInfo =>
        userInfo['studentID'].slice(0,2) === selectBatch
      );
    }
    return result;
  }

  return (
    <div className="profileItemList">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>프로필</th>
            <th>소환사</th>
            <th>학번 / 이름</th>
            <th>티어</th>
            <th>레벨</th>
            <th></th>
            <th>승률</th>
            <th>포지션</th>
          </tr>
        </thead>

        <tbody>
          {data !== undefined &&
          profileFilter(data).map(
            (userInfo, index) => 
            <ProfileItem
              info = {userInfo}
              index = {index}
              key = {userInfo['studentID']}
            />)}
        </tbody>      
      </table>
    </div>
  );
};
  
export default ProfileItemList;