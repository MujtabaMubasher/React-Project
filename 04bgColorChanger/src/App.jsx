import { useState } from 'react'
function App() {
  const [color, setColor] = useState('Silver')
  let lastColor

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1.5 rounded-full text-white' style={{backgroundColor: 'green'}} onClick={()=> setColor('green')}>
            Green
          </button>
          <button className='outline-none px-4 py-1.5 rounded-full text-white' style={{backgroundColor: 'black'}} onClick={()=> setColor('black')}>
            Black
          </button>
          <button className='outline-none px-4 py-1.5 rounded-full text-white' style={{backgroundColor: 'Orange'}} onClick={()=> setColor('orange')} >
            Orange
          </button>
          <button className='outline-none px-4 py-1.5 rounded-full text-black' style={{backgroundColor: 'Pink'}} onClick={()=> setColor('pink')}>
            Pink
          </button>
          <button className='outline-none px-4 py-1.5 rounded-full text-black' style={{backgroundColor: 'Yellow'}} onClick={()=> setColor('yellow')}>
            Yellow
          </button>

          <button className='outline-none px-4 py-1.5 rounded-full text-white' style={{backgroundColor: 'Blue'}} onClick={()=> setColor('blue')}>
            Blue
          </button>
          <button className='outline-none px-4 py-1.5 rounded-full text-white' style={{backgroundColor: 'Brown'}} onClick={()=> setColor('brown')}>
            Brown
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
