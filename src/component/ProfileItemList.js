import React from 'react'
import ProfileItem from './ProfileItem'
import './ProfileItemList.css'
import infoList from './../dummy'

const ProfileItemList = ({selectLine, selectBatch, searchTerm}) => {
  console.log(infoList);

  let result = infoList.filter(userInfo =>
    JSON.stringify(userInfo).includes(searchTerm)
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

  const profileLists = result.map(
    userInfo => 
    <ProfileItem
      info = {userInfo}
      key = {userInfo['studentID']}
    />)

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
          {profileLists}
        </tbody>      
      </table>
    </div>
  );
};
  
export default ProfileItemList;