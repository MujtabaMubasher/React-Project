//import React from 'react'
import './App.css';
import Card from './components/Card';

function App() {
  let obj = {
    name:'Mujtaba Mubasher',
    age: 24

}

 let newArr = [1,5,3,6,8,4]
    
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
     <Card userName = 'ChaiAurCode' btnText = 'Click Me' />
     <Card userName = 'Mujtaba Mubasher' btnText = 'Visit Profile'/>
    </>
  )
}

export default App
