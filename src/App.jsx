import { useState } from 'react'
 
import './App.css'
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';
import Cart from './components/Cart/Cart';

function App() {
   const [showModal, setShowModal] = useState(false)

	 const handleShow =()=>{
		console.log(showModal)
        setShowModal(true)
	 }
   const handleUnShow =()=>{
        setShowModal(false)
	 }
  return (
    <>
		{showModal && <Cart closeCart={handleUnShow}/>}
        
      <Header showCart={handleShow}/>
			<main className="point-main">
				<Meal/>
			</main>
			
    </>
  )
}

export default App
