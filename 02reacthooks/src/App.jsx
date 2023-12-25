import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 5

   let [counter ,  setCounter] = useState(0)


   function addValue(){
    counter = counter +1
     setCounter(counter)

     if(counter >= 20){
      setCounter(counter = 20)
    }

      //console.log('valueAdded : ', counter );
   }

   function removeValue(){
    counter = counter -1
    setCounter(counter )
     
    if(counter < 0){
      setCounter(counter = 0)
    }
   
    //console.log('valueRemove : ', counter );

}

  return (
    <>
      <h1>React Hook : {counter} </h1>

      <button onClick={addValue}>Value Added: {counter}</button>
      <button onClick={removeValue}>Value Remove: {counter}</button>
      <p>Another Counter: {counter}</p>
       
    </>
  )
}

export default App
