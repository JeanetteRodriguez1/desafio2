import { useCartContext } from "../../Context/CartContext"
import "./Cart.css"
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
import { RiDeleteBinLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { RiDeleteBinLine} from "react-icons/ri";
import {addDoc, collection, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch} from "firebase/firestore"
import { useState } from "react";



export const Cart = () => {

  const{ cartList, deleteCart, totalPrice,  totalQty} = useCartContext()
  const [orderSent, setOrderSent] = useState(false)
  const [orderId, setOrderId] = useState()

  async function createOrder(){
    async function createOrder(){

      let order ={}
  
      order.buyer ={name:"Nancy", email:"bionicajr@gmail.com", phone:"3884044239"}
      order.total = totalPrice()
      order.items= cartList.map(product=>{
        const id = product.id
        const name= product.name
        const price= product.price*product.quantity
  
        return{id,name,price}
      })
  
      
      const db = getFirestore()
  
      const queryCollection = collection(db,"orders")
      addDoc(queryCollection, order)
       .then (resp=> setOrderId(resp.id))
       .catch(err => console.log(err))
       .finally(()=>deleteCart())
  

       //update 
      const queryCollectionStock = collection (db, "products")
       
      const queryUpdateStock = query(
         queryCollectionStock,
         where(documentId(), "in", cartList.map(it => it.id))
      )
  

      const batch = writeBatch(db)
      await getDocs(queryUpdateStock)
        .then (resp=>resp.docs.forEach(res=>batch.update(res.ref,{
         stock:res.data().stock - cartList.find(product => product.id === res.id).quantity
       })))
       .catch(err => console.log(err))
       .finally(()=>deleteCart())
  
      batch.commit()
    }
  
    function sendOrder(){
      setOrderSent(true)
      createOrder()
    }
    
    if(!totalQty()){
      return(
  
        <div>
          {orderSent 
          ?
          <div>
            <h3>Ha finalizado correctamente su compra</h3>    
            <h3>Código de compra: {orderId}</h3> 
          </div>
          :
          <h3 className="deleteCart">El carrito está vacío</h3>}
          <Link to = "/"><button className="bProducto">Ver productos</button></Link>  
        </div>
  
      )
    }  
  
  
  
  
   return (
    <>   
    
      <section className="mt-5">
        <div className="container">
          <div className="cart">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-color">
                  <tr>
                    <th scope="col" className="text-white">Producto</th>
                    <th scope="col" className="text-white">Precio</th>
                    <th scope="col" className="text-white">Cantidad</th>
                    <th scope="col" className="text-white">Total </th>
                    <button onClick={deleteCart} className="btn" ><RiDeleteBinLine/></button>
       
                  </tr>
                </thead>
                {cartList.map(product => <CartItem key={product.id} product={product}/>)}
              </table>
              
            </div>
           </div>
         </div>
          
          <Link to = "/"><button className="bProducto">Lista de Productos</button></Link> 
      </section>

       <div className="col-lg-4 offset-lg-4">
         <div className="checkout">
           <ul>
             <li className="cart-total">Total ${totalPrice()!== 0 && totalPrice()}</li>
           </ul>
           <a href="#" className="proceed-btn" >Comprar</a>
           <Link to = "/"><button className="bProducto">Seguir comprando</button></Link>
          <button onClick={deleteCart} className="bProducto ms-1">Vaciar carrito</button> 
         </div>
       </div>
    </>
  )
         
  }

  /*return (
      <div>Cart</div>,
    <div>
      {cartList.map(product => <li> {product.name} - ${product.price} - {product.quantity} </li>)}
      <button onClick={deleteCart}>Reiniciar Compra</button>
    </div>
  )
}*/