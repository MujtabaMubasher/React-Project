import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    // const [data , setData] = useState([])
    
    // useEffect(()=>{

    //     fetch('https://api.github.com/users/MujtabaMubasher')
    //     .then((res)=> res.json())
    //     .then((data)=>setData(data))

    // }, [])

  return (
    <>
    <div className='text-center text-white bg-slate-800 py-4 text-3xl'>
        Github Followers:{data.followers} 
        
    <img src={data.avatar_url} alt="Profile Picture" className='content-center'/>    
    </div>

        

    </>
  )
}

export default Github

export  const  githubInfoLoader  = async ()=>{

    const response = await fetch("https://api.github.com/users/MujtabaMubasher")

    return response.json()


}