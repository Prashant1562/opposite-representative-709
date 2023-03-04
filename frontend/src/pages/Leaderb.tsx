import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leader.css';

interface User {
  userName: string;
  wins: number;
}

const Leaderb = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:3004/user',
    })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users.length]);

  return (
    <div className='leaderMain'>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Win</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((el, id) => {
            return (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{el.userName}</td>
                <td>{el.wins}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderb;
