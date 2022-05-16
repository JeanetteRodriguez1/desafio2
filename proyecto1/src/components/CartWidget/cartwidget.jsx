import { BsCart2 } from "react-icons/bs";
import "./cartWidget.css"
import { Link } from "react-router-dom";

const CartWidget = () => {

  return (
    <div>
      <h3><BsCart2/></h3>
    <a href="#" className="bCarrito"><BsCart2/></a>
  
</div>
  )
}

export default CartWidget