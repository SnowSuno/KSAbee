import React from 'react'
import './ProfileItem.css'

const ProfileItem = ({ studentID, nickname }) => {
    return (
        <div className="profileItem">
            <h3>Profile Item</h3>
            {studentID}<br/>
            {nickname}
        </div>
    )
}


export default ProfileItem;