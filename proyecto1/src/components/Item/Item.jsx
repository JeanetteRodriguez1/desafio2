import { ItemCount } from "../ItemCount/itemCount"
import "./ItemCount/itemCount.css"
import { Link } from "react-router-dom"



const Item = ({name, price,img,id}) =>{
    return(
        <div className="galeria">
            <div className="galer">
                <Link to= {`/detail/${id}`} >

                    <div className="card">
                        <img className="imgCard" src={img} alt="" />
                        <h3>{name}</h3>
                        <h6>{price}</h6>
                        
                        <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos`)}/>
                        
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Item