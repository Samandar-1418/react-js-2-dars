import { useState } from 'react'
import Header from './assets/card/header/header'
import './App.css'
import Input from './assets/card/header/input/Input'
import Paragraf from './assets/card/paragraf/paragraf'


function App() {
  const data = {
   ID : "Your Mail ID",
   text: ' Please fill your information so we can get in touch with you.',
   name : "Your Name",
   phone: "(123) 456 - 7890",
   year:' dd - mm - yyyy'
  }
  return (
    <>
    <Header></Header>
    <Paragraf></Paragraf>
      <div className="container">
      <Input data = {data}></Input>
      </div>
    </>
  )
}

export default App
