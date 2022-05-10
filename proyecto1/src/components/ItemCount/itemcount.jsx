import { useState } from "react";
import "./itemCount.css"


export function ItemCount({stock,initial,onAdd}){

    const [count, setCount] = useState (initial)

    function sumar(){
        if(count < stock){
            setCount (count+1);
        }
    } 
    function restar(){
        if (count > 1){
            setCount(count-1);            
        }
    }

    function agregar(){
        onAdd (count);
    }

    return(
        <div className="galeria">
            <div className="card">
            <img className="imgCard" src="https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
            <h3>Producto</h3>
            <h6>$100</h6>
                <div>
                    <button  onClick={restar} >-</button>
                    <button  onClick={sumar}>+</button>
                    <p>{count}</p>
                    <button className="bCard" onClick={agregar}>Agregar</button>
                </div>
            </div>
        </div>
    );
}