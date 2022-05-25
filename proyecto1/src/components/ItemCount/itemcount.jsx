import { useState } from "react";
import "./itemCount.css"


export function ItemCount({stock,initial,onAdd}){}
export function ItemCount({stock,initial,onAdd, handleInter}){
        const [count, setCount] = useState (initial)
    }
    
    
        function sumar(){}
    
        function increase(){
            if(count < stock){
                setCount (count+1);
                setCount (count+1)
            }
        } 
        function restar(){}
        function decrease(){
            if (count > 1){
                setCount(count-1);            
                setCount(count-1)         
            }
        }
        function agregar(){
            onAdd (count);
        function addCart(){
            onAdd(count);
            handleInter();
        }
    
        return(
            <div>
                <button  onClick={restar} >-</button>
                <button  onClick={sumar}>+</button>
                <button  onClick={decrease}>-</button>
                <button  onClick={increase}>+</button>
                <p>{count}</p>
                <button className="bCard" onClick={agregar}>Agregar al Carrito</button>
                <button  className="bCard" onClick={addCart}>Agregar al Carrito</button>
            </div>
        )    
    }










    /*const [count, setCount] = useState (initial)

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
            <img className="imgCard" src="https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?s=612x612" alt="" />
            <h3>Producto</h3>
            <h6>$700</h6>
                <div>
                    <button  onClick={restar} >-</button>
                    <button  onClick={sumar}>+</button>
                    <p>{count}</p>
                    <button className="bCard" onClick={agregar}>Agregar</button>
                </div>
            </div>
        </div>
    );
}*/