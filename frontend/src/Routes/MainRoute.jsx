import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Game from '../pages/Game'
import Home from '../pages/home'
import Leaderb from '../pages/Leaderb'

const MainRoute = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/leader" element={<Leaderb/>} />
    <Route path="/game/:userName" element={<Game/>} />
   </Routes>
  )
}

export default MainRoute