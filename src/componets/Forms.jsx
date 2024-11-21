import React from 'react'

const Forms = (props) => {
    const {type, label, name, placeholder} = props;
  
    return (
    <div className='flex item-center space-x-5 justify-between py-1 space-y-2'>
        <label htmlFor='username'>{label}</label>
        <input type={type} name={name} className='border p-2' placeholder={placeholder} />
    </div>
)}

export default Forms