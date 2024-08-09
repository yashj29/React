// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   let [counter , setCounter] = useState(15)

//   //let counter = 15

//   const addValue = () => {
//     //counter = counter + 1
//     setCounter(counter + 1)
//     //console.log("clicked" , counter);
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }

//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>
//       <button
//       onClick={addValue}
//       >Add value {counter}</button>
//       <br />
//       <button
//       onClick={removeValue}
//       >Remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App





//this is the same code as above but there is a little difference which is button value will remain between 0 and 20.
 
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   let [counter , setCounter] = useState(15)

//   //let counter = 15

//   const addValue = () => {
//     //counter = counter + 1
//     if(counter<20){
//       setCounter(counter + 1)
//     }
    
//     //console.log("clicked" , counter);
//   }

//   const removeValue = () => {
//     if(counter>0){
//       setCounter(counter - 1)
//     }
//   }

//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>
//       <button
//       onClick={addValue}
//       >Add value {counter}</button>
//       <br />
//       <button
//       onClick={removeValue}
//       >Remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App




//interview question

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    //console.log("clicked" , counter);
  }

  const removeValue = () => {
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

