import Item from '../Item/Item'

const ItemDetail = ({product}) => {
  return (
    <div>
      <Item 
            id = {product.id}
            name= {product.name}
            price={product.price}
            img=  {product.img} />
    </div>
  )
}

export default ItemDetail

