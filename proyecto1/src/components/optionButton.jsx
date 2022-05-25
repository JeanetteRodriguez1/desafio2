import React from "react"
import {Link} from "react-router-dom";

const OptionButtons = () => {
    return(
        <>
        <Link to = "/cart">
            <button className="bCard">Finaliza tu Compra</button>        
        </Link>
        <Link to = "/">
            <button className="bCard">Seguí Comprando</button>        
        </Link>

        </>
    )
}

export default OptionButtons 