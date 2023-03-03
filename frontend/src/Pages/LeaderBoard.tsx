import React from 'react'
import Navbar from '../Components/Navbar'
import "./LeaderBoard.css"
const LeaderBoard = () => {
  return (
<>
<Navbar/>
<div className='leader'>
<table>
    <thead>
        <tr>
         <th>Rank</th>
         <th>Name</th>
         <th>Points</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>1.</td>
        <td>adf</td>
        <td>222</td>
        </tr>
        <tr>
        <td>2.</td>
        <td>adf</td>
        <td>220</td>
        </tr>
    </tbody>
</table>

</div>
</>
  )
}

export default LeaderBoard