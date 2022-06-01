import { useCartContext } from "../../Context/CartContext"
import "./Cart.css"
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
import { RiDeleteBinLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { RiDeleteBinLine} from "react-icons/ri";



export const Cart = () => {

  const{ cartList, deleteCart, totalPrice, removeItem, totalQty} = useCartContext()
  
  if(!totalQty()){
    return(

      <div>
        <h3>El carrito esta vacío</h3>
        <Link to = "/"><button className="bProducto">Ver Productos</button></Link>  
      
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