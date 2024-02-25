import React, { useCallback, useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const copyPassward = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQSTURVWXYZabcdefghijklmnopstqurvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*(){}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(()=> {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      <div className='container mx-auto flex items-center justify-center h-screen'>
      <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg px-6 py-8 text-orange-500 bg-gray-700'>
       <h1 className='text-center text-gray-300 mb-10 text-4xl'>Password Generator</h1> 
       <button onClick={passwordGenerator}
       className='bg-blue-500 hover:bg-blue-700 text-white mb-10 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
       >Generate Password</button>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button 
          onClick={copyPassward} 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'> Numbers </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'> Characters </label>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
