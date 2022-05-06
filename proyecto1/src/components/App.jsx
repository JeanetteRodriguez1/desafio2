import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>

      <ItemListContainer greeting='Soy el contenedor'/>
    </div>
  )
}

export default App