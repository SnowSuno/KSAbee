import React, { useState } from 'react'
import ProfileItem from './ProfileItem'
import './ProfileItem.css'

const ProfileItemList = () => {
    const [profileList, setProfileList] = useState([['19-079', '마리마리착마리'], ['19-001', '꿀벌지민']]);

    return (
      <div className="profileItemList">
          profile List<br/>
          <ProfileItem 
            studentID = {profileList[0][0]} 
            nickname={profileList[0][1]}
          />
      </div>
    );
  };
  
  export default ProfileItemList;