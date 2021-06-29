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
            <th>id</th>
            <th>profile</th>
            <th>nick name</th>
            <th>student id / name</th>
            <th>tier</th>
            <th>level</th>
            <th>game log</th>
            <th>win rate</th>
            <th>position</th>
          </tr>
        </thead>

        <tbody>
          {data !== undefined &&
          profileFilter(data).map(
            userInfo => 
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