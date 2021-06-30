import React from 'react'
import ProfileItem from './ProfileItem'
import './ProfileItemList.css'

const ProfileItemList = ({data, selectLine, selectBatch, searchTerm}) => {
  function addIndex({userInfo, index}) {
    return {
      ...userInfo,
      id: index+1
    }
  }

  const profileFilter = (userInfo) => {
    // position, batch 부터
    var result = userInfo;

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

    // add id
    result = result.map(
      (userInfo, index) => addIndex({userInfo, index})
    );

    // search Term filter
    result = result.filter(info =>
      info['nickName'].includes(searchTerm) ||
      info['studentID'].includes(searchTerm) ||
      info['studentName'].includes(searchTerm) ||
      info['tier'].includes(searchTerm) ||
      String(info['level']).includes(searchTerm)
    );

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
              key = {userInfo['studentID']}
            />)}
        </tbody>      
      </table>
    </div>
  );
};
  
export default ProfileItemList;