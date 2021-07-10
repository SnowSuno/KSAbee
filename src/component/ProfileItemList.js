import React, { useState, useEffect } from 'react'
import ProfileItem from './ProfileItem'
import './ProfileItemList.css'

const ProfileItemList = ({data, selectLine, selectBatch, searchTerm}) => {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState('tier'); // tier, level, winRate
  const [order, setOrder] = useState('INC');

  function onSelectSort(key, ord) {
    setSortBy(key);
    setOrder(ord);
  }

  function addIndex({userInfo, index}) {
    return {
      ...userInfo,
      order: index+1
    }
  }

  useEffect(() => {
    // position, batch 부터
    var result = data;

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

    result.sort(function(a, b) {
      return value(sortBy, a) < value(sortBy, b) ? -1 : value(sortBy, a) > value(sortBy, b) ? 1 : 0;
    });

    if (order === 'DESC') {
      result = result.reverse();
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

    setUsers(result);
  }, [searchTerm, selectBatch, selectLine, data, sortBy, order]);
  
  function value(key, user) {
    if (key === 'tier') return user['index'];
    if (key === 'level')  return user['level'];
    if (key === 'winRate')  return user['tierInfo']['winRate'];
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
            <th>
              티어
              <div className="buttons">
                <button onClick={() => {onSelectSort("tier", "INC")}}>
                  <img src="./../img/sort-inc.png" alt="sort" />
                </button>
                <button onClick={() => {onSelectSort("tier", "DESC")}}>
                  <img src="./../img/sort-desc.png" alt="sort" />
                </button>
              </div>
            </th>
            <th>
              레벨
              <div className="buttons">
                <button onClick={() => {onSelectSort('level', 'INC')}}>
                  <img src="./../img/sort-inc.png" alt="sort" />
                </button>
                <button onClick={() => {onSelectSort('level', 'DESC')}}>
                  <img src="./../img/sort-desc.png" alt="sort" />
                </button>
              </div>
            </th>
            <th></th>
            <th>
              승률
              <div className="buttons">
                <button onClick={() => {onSelectSort('winRate', 'INC')}}>
                  <img src="./../img/sort-inc.png" alt="sort" />
                </button>
                <button onClick={() => {onSelectSort('winRate', 'DESC')}}>
                  <img src="./../img/sort-desc.png" alt="sort" />
                </button>
              </div>
            </th>
            <th>포지션</th>
          </tr>
        </thead>

        <tbody>
          {data !== undefined &&
          users.map(
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