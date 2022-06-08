import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget"
import "./Navbar.css";
import logo from "./src/MalaMia.png"
import { Link, NavLink} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

function Navbar (){
    return(
        <>
            <header>
                <div className="contrNav">
                    <div className="navbar">
                        <label htmlFor="btn-menu" className="icon-menu"> <FiMenu/> </label>

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
                                    <p> <button className="bNeon">Contacto</button></p>
                                    <li><NavLink to = '/'>Inicio</NavLink></li>
                                    <li><NavLink to = '/category/camisa'>Camisa</NavLink></li>
                                    <li><NavLink to = '/category/campera'>Campera</NavLink></li>
                                    <li><NavLink to = '/category/jeans'>Jeans</NavLink></li>
                                </ul>
                            </nav>    
                            
                            <CartWidget/>
                    </div>
                    <label htmlFor="btn-menu" className="icon-equis"><FiChevronLeft/></label>

                </div>
            </header>
        </>
    )
}

export default Navbar