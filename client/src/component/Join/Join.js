import React, { useState } from 'react'
import "./Join.css";
import {Link} from "react-router-dom";

let user;

const sendUser=()=>{
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value= "";
   }

const Join = () => {
    
    const [name,setname] = useState("");
    
  return (
    <div className='JoinPage'>
     <div className='JoinContainer'>
     <img src='https://t3.ftcdn.net/jpg/00/96/08/90/240_F_96089033_p0CbHMQFfTBMmmu51tYj2FNy3fYSY0KD.jpg' />
        <h1>Sambhashana</h1>
        <input onChange={(e)=> setname(e.target.value)}
        placeholder='Enter Your Name' type='text' id='joinInput' />
       <Link onClick={(event)=>!name?event.preventDefault():null}
        to="/chat"> <button 
       onClick={sendUser}
       className='joinbtn'>Login</button>
       </Link>
     </div>
     
    </div>
  )
}

export default Join
export {user};
