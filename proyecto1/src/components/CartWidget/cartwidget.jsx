import { BsCart2 } from "react-icons/bs";
import "./cartWidget.css"
import { Link } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";


const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
       <a href="#" className="bCarrito"><BsCart2/></a>
      </div>
      <NavLink to="/cart" className="bCarrito"><BsCart2/></NavLink>
      </Link>
  )
}

export default CartWidget