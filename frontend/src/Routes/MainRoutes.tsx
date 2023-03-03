import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import LeaderBoard from '../Pages/LeaderBoard';

const MainRoutes = () => {
  return (


<Routes>
<Route path='/' element={<Home/>} />
<Route path='/leader' element={<LeaderBoard/>} />


</Routes>


)
}

export default MainRoutes