import React from 'react'
import './ProfileItem.css'

const ProfileItem = ({ info, index }) => {
    const positionImgUrl = './img/position/' + info['position'] + '.png';

    return (
        <tr className="profileItem">
            <td>
                {info['order']}
            </td>
            <td>
                <img className="profileImg" src={info['profile_image']} alt="profile-img"/>
            </td>
            <td>
                {info['nickname']}
            </td>
            <td>
                {info['user']['sid']} {info['user']['name']}
            </td>
            <td>
                {info['tier']} {info['league_points']}LP
            </td>
            <td>
                Lv.{info['level']}
            </td>
            <td>
                <div className="gameLog">
                    {/* <div className="winBox" style={{width: `${info['tierInfo']['winRate']}%`}}></div> */}
                    <p className="winNumber">{info['wins']}</p>
                    <p className="lossNumber">{info['losses']}</p>
                </div>
            </td>
            <td>
                {/* {info['tierInfo']['winRate']}% */}
            </td>
            <td>
                <img className="positionImg" src={positionImgUrl} alt="position-img"/>
            </td>
        </tr>
    )
}

export default ProfileItem;