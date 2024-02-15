import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function login() {
    const [userName , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(UserContext)

    const submitHandler = (e)=>{
       e.preventDefault()
       setUser({userName, password})
    }

  return (
 <>
    <div>login</div>

    <input type="text" 
      
      value={userName}
      onChange={(e)=> setUsername(e.target.value)}
      placeholder='username'
    />
    {" "}

    <input type="text" 
      
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      placeholder='Password'
    />

    <button onClick={submitHandler}>Submit</button>
 </>

  )
}

export default login