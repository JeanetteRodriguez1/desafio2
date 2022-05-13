import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/itemListContainer'
import {ItemCount} from './components/ItemCount/itemCount'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>

      <ItemListContainer greeting='Soy el contenedor'/>
      return 
    (
    <>
    
    <Navbar/>
      <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos`)}/>              

    </>
    </div>

  )
}

export default App