import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget"
import "./Navbar.css";
import logo from "./src/MalaMia.png"

function Navbar (){
    return(
        <>
            <header>
                <img className="logo" src={logo} alt="logo"/>

                    <nav>
                        <ul className="navLinks">
                            <li> <a href="#">Inicio</a></li>
                            <li> <a href="#">Productos</a></li>
                            <li> <a href="#">Nosotros</a></li>
                            <a className="cta" href="#"><button>Contacto</button></a>
                            <Link to = '/'>
                            <li> <p>Inicio</p></li>
                            </Link>
                            <li> <p>Camisa</p></li>
                            <li> <p>Campera</p></li>
                            <li> <p>Jeans</p></li>
                            <p> <button className="cta">Contacto</button></p>
                        </ul>
                    </nav>    
                    
                    <CartWidget/>
                
            </header>
        </>
    )
}

export default Navbar