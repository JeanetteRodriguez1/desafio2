import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/itemListContainer'
import {ItemCount} from './components/ItemCount/itemCount'
import { Cart } from './components/Cart/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { useState, createContext } from 'react'
import CartContextProvider  from './Context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
      
        <div>       
          <Navbar/>

          <Routes>
            <Route path ="/" element = {<ItemListContainer/>} />
            <Route path ="/category/:id" element = {<ItemListContainer/>} />
            <Route path ="/category/:category" element = {<ItemListContainer/>} />
            <Route path='/detail/:id' element = {<ItemDetailContainer/>} />
            <Route path='/cart' element = {<Cart/>} />

            <Route path= "/*" element = {<Navigate to  = "/" replace />} />
            
            
                
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}
  
  
  
  
  
  
  
  
  
  
  
  
  export default App