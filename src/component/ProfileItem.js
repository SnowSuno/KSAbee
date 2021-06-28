import React from 'react'
import './ProfileItem.css'

const ProfileItem = ({ info }) => {
    const positionImgUrl = './img/position/' + info['position'] + '.png';

    return (
        <tr className="profileItem">
            <td>
                {info['id']}
            </td>
            <td>
                <img className="profileImg" src={info['profileImg']} alt="profile-img"/>
            </td>
            <td>
                {info['nickName']}
            </td>
            <td>
                {info['studentID']} {info['studentName']}
            </td>
            <td>
                {info['tier']} {info['tierInfo']['leaguePoints']}LP
            </td>
            <td>
                Lv.{info['level']}
            </td>
            <td>
                <div className="gameLog">
                    <div className="winCount" style={{width: `${info['tierInfo']['winRate']}%`}}>
                        {info['tierInfo']['wins']}
                    </div>
                    <div className="lossCount">
                        {info['tierInfo']['losses']}
                    </div>
                </div>
            </td>
            <td>
                {info['tierInfo']['winRate']}%
            </td>
            <td>
                <img className="positionImg" src={positionImgUrl} alt="position-img"/>
            </td>
        </tr>
    )
}


export default ProfileItem;