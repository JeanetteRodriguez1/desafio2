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
                        </ul>
                    </nav>
                    <a className="cta" href="#"><button>Contacto</button></a>

                    <CartWidget/>
                
            </header>
        </>
    )
}

export default Navbar