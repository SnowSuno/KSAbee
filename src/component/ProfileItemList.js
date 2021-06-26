import React, { useState } from 'react'
import ProfileItem from './ProfileItem'
import './ProfileItem.css'

const ProfileItemList = () => {

  const [profileList, setProfileList] = useState([
    {studentID:"19-079", nickName:"마리마리착마리"},
    {studentID:"19-001", nickName:"리듬타지마"},
  ]);

  const profileLists = profileList.map(
    user => 
    <ProfileItem
      studentID = {user.studentID}
      nickname = {user.nickName}
      key = {user.studentID}
    />)

  return (
    <div className="profileItemList">
        profile List<br/>
        {profileLists}
    </div>
  );
};
  
export default ProfileItemList;