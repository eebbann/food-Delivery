import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';

function App() {
   

  return (
    <>
      <Header/>
			<Meal/>
    </>
  )
}

export default App
