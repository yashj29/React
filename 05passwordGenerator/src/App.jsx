// import { useState , useCallback , useEffect , useRef } from 'react'



// function App() {
//   const [length , setLength] = useState(8)
//   const [numberAllowed , setNumberAllowed]  =useState(false)
//   const [charAllowed , setCharAllowed] = useState(false)
//   const [password , setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(numberAllowed) str += "0123456789"
//     if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for(let i = 1 ; i <= length ; i++){
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
//     }
//     setPassword(pass)

//   } , [length , numberAllowed , charAllowed , setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0,9);
//     window.navigator.clipboard.writeText(password)
//   } , [password])

//   useEffect(() => {
//     passwordGenerator()
//   } , [length , numberAllowed , charAllowed , passwordGenerator])


//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'
//       > 
//       <h1 className='text-white text-center my-3'>Password Generator</h1>
//         <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
//           <input 
//           type="text"
//           value={password}
//           className='outline-none w-80 py-1 px-3'
//           placeholder='password' 
//           readOnly
//           ref={passwordRef}
//           />
//           <button
//           onClick={copyPasswordToClipboard}
//           className='outline-none bg-blue-700 text-white h-8 px-3 py-0.5 shrink-0'
//           >copy</button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'>
//             <input 
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className='cursor-pointer'
//             onChange={(e) => {setLength(e.target.value)}}
//             />
//             <label>Length: {length}</label>

//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input 
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             id="numberInput"
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//             />
//             <label htmlFor="numberInput">Numbers</label>

//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input 
//             type="checkbox"
//             defaultChecked={charAllowed}
//             id="characterInput"
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//             />
//             <label htmlFor="characterInput">Characters</label>
//           </div>

//         </div>

//       </div>
//     </>
//   )
// }

// export default App






// import { useState , useCallback , useEffect , useRef } from 'react'


// function App() {
//   const [length , setLength] = useState(8)
//   const [numberAllowed , setNumberAllowed]  =useState(false)
//   const [charAllowed , setCharAllowed] = useState(false)
//   const [password , setPassword] = useState("")
//   const [isCopied , setIsCopied] = useState(false)

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(numberAllowed) str += "0123456789"
//     if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for(let i = 1 ; i <= length ; i++){
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
//     }
//     setPassword(pass)

//   } , [length , numberAllowed , charAllowed , setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0,9);
//     window.navigator.clipboard.writeText(password)

//     setIsCopied(true);
//     setTimeout(() => {
//       setIsCopied(false);
//     },1000);
//   } , [password])

//   useEffect(() => {
//     passwordGenerator()
//   } , [length , numberAllowed , charAllowed , passwordGenerator])


//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'
//       > 
//       <h1 className='text-white text-center my-3'>Password Generator</h1>
//         <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
//           <input 
//           type="text"
//           value={password}
//           className='outline-none w-80 py-1 px-3'
//           placeholder='password' 
//           readOnly
//           ref={passwordRef}
//           />
//           <button
//           onClick={copyPasswordToClipboard}
//           className={`outline-none text-white h-8 w-20 px-3 py-0.5 shrink-0 transition-colors ${ isCopied ? 'bg-green-700' : 'bg-blue-700'}`}
//           >{isCopied ? 'Copied!' : 'Copy'}</button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'>
//             <input 
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className='cursor-pointer'
//             onChange={(e) => {setLength(e.target.value)}}
//             />
//             <label>Length: {length}</label>

//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input 
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             id="numberInput"
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//             />
//             <label htmlFor="numberInput">Numbers</label>

//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input 
//             type="checkbox"
//             defaultChecked={charAllowed}
//             id="characterInput"
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//             />
//             <label htmlFor="characterInput">Characters</label>
//           </div>

//         </div>

//       </div>
//     </>
//   )
// }

// export default App




import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [isCopied, setIsCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password)

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://watermark.lovepik.com/photo/50054/1552.jpg_wh1200.jpg')` }}
    >
      <div className='w-full max-w-xl mx-auto shadow-lg rounded-lg px-6 py-6 text-orange-500 bg-gray-900 bg-opacity-90'>
        <h1 className='text-white text-3xl font-bold text-center mb-6'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-3 px-4 text-lg'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none text-white text-lg font-semibold h-14 px-4 py-2 shrink-0 transition-colors ${isCopied ? 'bg-green-700' : 'bg-blue-700'}`}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className='flex flex-col sm:flex-row text-sm gap-4 text-white'>
          <div className='flex items-center gap-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

