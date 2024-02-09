import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

const {prams} = useParams()

  return (
    <div className='text-center text-white text-3xl text- bg-slate-600  
     py-2.5'>User ID: {prams} </div>
  )
}

export default User