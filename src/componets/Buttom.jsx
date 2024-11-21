import React from 'react'

const Buttom = ({ number }) => {
  return (
    <div>
        <button className='bg-red-800 px-4 py-2'>
        {number}
      </button>
    </div>
  )
}

export default Buttom