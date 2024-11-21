import React from 'react'
import Buttom from './componets/Buttom'
import Forms from './componets/Forms';
import { useState, useEffect } from 'react'
import { FaPlusSquare } from "react-icons/fa";


const App = () => {
  const [number, setNumber] = useState(0);
    //ฟังค์ชั่น
    const plusNumber = () => {
      setNumber((prev) => prev+1)
      console.log('Number:', number)
    }

    useEffect(() => {
      plusNumber();
    }, [])
    
  return (
    <div className='flex flex-col space-x-10 items-center justify-center h-screen'>
       {/* <Buttom number='1' />
       <Buttom number='2' />
       <Buttom number='3' />
       <Buttom number='4' />
       <Forms/>
       <button onClick={plusNumber} className='bg-red-800 text-white rouned-md px-4 py-2' >
       <FaPlusSquare />
       </button>
       <p>{number}</p> */}
       <form className='flex flex-col '>
        <Forms label='Username' type='text' placeholder='Username'/>
        <Forms label='Password' type='password' placeholder='Password'/>
        <Forms label='Phone' type='text' placeholder='088-xxxxxxx'/>
        <button className='bg-green-500 hover:bg-green-800 px-1 mt-3 py-1 text-white rounded-xl'>Submit</button>
       </form>
      </div>
  )
}

export default App