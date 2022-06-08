import Item from '../Item/Item'
import { ItemCount } from "../ItemCount/itemCount"
import './ItemDetail.css'
import { useState } from "react";
import OptionButtons from "../OptionButtons";


const ItemDetail = ({product}) => {
  const [inputType, setInputType]= useState('button')

  const handleInter = () =>{
    setInputType ('input')
  }

  const {addCart, cartList} = useCartContext()

  function onAdd (quantity) {
    console.log(`${quantity} ${product.name}`)
    addCart({...product, quantity})
  }

  return (

    <section className='container sproduct my-5 pt-5 me-5'>
        
          <div className='row mt-50'>
            <div className='col-lg-5 col-md-12 col-12'>
              <img className='img-fluid pb-1' src={product.img}  width={400} alt="" />
            </div>
          <div className='col-lg-6 col-md-12 col-12 mt-5'>        
            <h3 className='py-4'>{product.name}</h3>
            <h2>${product.price}</h2>
            <h4 className='m-5 mb-5'>Detalles</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate recusandae laborum, placeat explicabo totam optio culpa amet pariatur? Facilis quos, suscipit illo officia reiciendis minus autem ratione esse iste minima.</span>

           {
              inputType === 'button' ?
                <ItemCount 
                  initial={1} 
                  stock={product.stock} 
                  onAdd={onAdd}
                  handleInter={handleInter}/>
              :
              <OptionButtons/>
            }
          </div>
        </div>
    </section>
  )
  }




/*const ItemDetail = ({product}) => {
  return (
    <div>
      <Item 
            id = {product.id}
            name= {product.name}
            price={product.price}
            img=  {product.img} />
    </div>
  )
}*/

export default ItemDetail

