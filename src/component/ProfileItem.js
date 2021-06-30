import React from 'react'
import './ProfileItem.css'

const ProfileItem = ({ info, index }) => {
    const positionImgUrl = './img/position/' + info['position'] + '.png';

    return (
        <tr className="profileItem">
            <td>
                {index+1}
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
                    <div className="winBox" style={{width: `${info['tierInfo']['winRate']}%`}}></div>
                    <p className="winNumber">{info['tierInfo']['wins']}</p>
                    <p className="lossNumber">{info['tierInfo']['losses']}</p>
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