import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import ItemList from "../ItemList/itemList"
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"




const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    /*const {id} = useParams()*/    
    const {category} = useParams()    

    useEffect(()=>{
        const db = getFirestore()
        if(category){
            if(category){
                const queryCollection = collection(db,"products")   
                const queryCollectionFilter = query(queryCollection, where("category", "==" , category))
                getDocs(queryCollectionFilter)
                .then (resp => setProducts(resp.docs.map(product => ({ id:product.id, ...product.data() }))))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))
        }else{                  
            const queryCollection = collection(db,"products")
            getDocs(queryCollection)
                .then (resp => setProducts(resp.docs.map(product => ({ id:product.id, ...product.data() }))))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))

        }
        }
    )


  
       
        },[category]
    

    
    return(

        <div className="container">
            {loading ?
            <h2>Cargando..</h2>
            :
            <ItemList products={products}/>
            }
        </div>
    )
    
    export default ItemListContainer

















/*const productos = [
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

    const [products, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
            .then((res => setItem(res)))
            .catch((err)=>console.log(err))
    }, [])
    const {id} = useParams()    


    useEffect(()=>{
        if(id){
            getFetch()
                .then(resp => setItem(resp.filter((prods)=>prods.category === id)))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))
        }else{
            getFetch()
                .then(resp => setItem(resp))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))

        }
    }, [id])

 function ItemListContainer(){
    return(

        <div className="container">
            <ItemList items={productos}/>
            {loading ?
            <h2>Cargando..</h2>
            :
            <ItemList items={products}/>
            }
        </div>
    )
    }*/


