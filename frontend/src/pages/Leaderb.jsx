import React, { useEffect,useState } from 'react'
import axios from "axios"
import "./leader.css"


const Leaderb = () => {
const [users,setUsers]=useState([])

useEffect(()=>{
axios({
    url:"http://localhost:3004/user",
}).then((res)=>{
    setUsers(res.data)
})
},[users.length])
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
 {
    users?.map((el,id)=>{
        return        <tr>
        <td>{id+1}</td>
        <td>{el.userName}</td>
        <td>{el.wins}</td>
    </tr>
    })
 }
    </tbody>
</table>
 </div>
  )
}
export default Leaderb