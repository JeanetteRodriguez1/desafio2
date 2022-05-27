import { useCartContext } from "../../Context/CartContext"

export const Cart = () => {
  const{ cartList, deleteCart} = useCartContext()
  
  return (
      <div>Cart</div>,
    <div>
      {cartList.map(product => <li> {product.name} - ${product.price} - {product.quantity} </li>)}
      <button onClick={deleteCart}>Reiniciar Compra</button>
    </div>
  )
}