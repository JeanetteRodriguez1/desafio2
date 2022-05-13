import { useState,useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/itemList"


const productos = [
    {id:1, name: "Camisa", price:100, img: "https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?s=612x612"},
    {id:2,name: "Campera",price:200,img: "https://media.istockphoto.com/photos/young-woman-wearing-sterile-face-mask-picture-id1210830201"},
    {id:3,name: "Jeans",price:300,img: "https://media.istockphoto.com/photos/smiling-woman-leaning-on-white-wall-with-bag-picture-id857963320"}
]
const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve (productos)
    },2000)
})
const ItemListContainer = ()=>{
    const [productos, setItem] = useState([])
    
    useEffect(()=>{
        getFetch
            .then((res => setItem(res)))
            .catch((err)=>console.log(err))
    }, [])
  }
function();
    return(
        <div className="container">
          
            <ItemList items={productos}/>
        </div>
    );
    
export default ItemListContainer