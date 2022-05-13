import { ItemCount } from "../ItemCount/itemCount"
import "./ItemCount/itemCount.css"




const Item = ({name, price,img}) =>{
    return(
        <div className="galeria">
            <div className="card">
                <img className="imgCard" src={img} alt="" />
                <h3>{name}</h3>
                <h6>{price}</h6>
                
                <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos`)}/>
                
            </div>
        </div>
    )
}




export default Item