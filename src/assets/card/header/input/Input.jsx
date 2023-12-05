import React from 'react'
import './Input.css';
export default function Input(props) {
    const {text,name, ID, year, phone}=props.data;
    return (
    <form >

          <span>Contact details</span>
        <input className='text'  required placeholder={text} type="text"></input> 
        <h2>Name</h2>
        <input className='name' required placeholder={name} type="name"></input> 
        <h2>Phone Number</h2>
        <input className='phone' required placeholder={phone} type="number"></input> 
        <h2>Email </h2>
        <input className='email' required placeholder={ID} type="email"></input> 
          <h2>Date</h2>
        <input className='year' required placeholder={year} type="date"></input> 
    </form>
  )
}
