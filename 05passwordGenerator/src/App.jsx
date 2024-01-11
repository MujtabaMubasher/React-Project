import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // Use useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    
    let pass = ""
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    // let number = '1234567890'
    // let character = '@!$%^&*()_+=":?/\``~;'
    
    if(numAllowed) {
      str += '1234567890'
    }
    if(charAllowed){
       str += '@!$%^&*()_+=":?/\``~;'
    }

    for (let  i = 1;  i <= length; i++) {
        
      pass += str[Math.floor(Math.random() * str.length +1) ]
      
    }

    setpassword(pass)

  },[length , numAllowed , charAllowed, setpassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0 , 15)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed ])
   

  
  
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3  my-10 mt-36 bg-gray-800 text-orange-500'>
        
        <h1 className='text-white text-center my-3 text-2xl font-semibold		'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text" placeholder='Password' className='w-full outline-none py-1.5 px-4 text-violet-700' readOnly value={password} ref={passwordRef}/>
           <button className='outline-none bg-indigo-700 text-white  px-3 py-0.5 hover:bg-indigo-800 ' onClick={copyToClipBoard}>Copy</button>
        </div>

        <div className="flex items-center gap-x-5 ">
          <div className='flex items-center gap-x-2'>
             <input type="range" min={6} max={100} className='cursor-pointer' value={length} onChange={(e)=> setLength(e.target.value)}/>
             <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={()=> {setNumAllowed((prev)=> !prev)}} />
            <label htmlFor="numberInput">Add Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=> {setCharAllowed((prev)=> !prev)}} />
            <label htmlFor="charInput">Add Characters</label>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default App
