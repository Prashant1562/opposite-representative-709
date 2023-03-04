import React, { useState } from 'react';
import "./home.css";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from 'react-router-dom';

interface User {
  userName: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [user, setUser] = useState<User>({ userName: '' });

  const submitUserName = () => {
    axios({
      url:"http://localhost:3004/user",
      method:"post",
      data:{userName}
    }).then((res: AxiosResponse<User>) => {
      setUser(res.data);
      navigate(`/game/${res.data.userName}`);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className='homeMain'>
      <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder='Enter username' />
      <button onClick={submitUserName}>Submit</button>
    </div>
  );
};

export default Home;