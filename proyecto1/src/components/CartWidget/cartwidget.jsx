import { BsCart2 } from "react-icons/bs";
import "./cartWidget.css"
import { Link } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

    const CartWidget = () => {
      const {totalQty} = useCartContext()
      
      return (
        <NavLink to="/cart" className={bCarrito}>
          <BsCart2 className="icnCart"/>
          {totalQty() !== 0 && totalQty()}
          <BsCart2/>
        </NavLink>
        
      )
    }



   

export default CartWidget