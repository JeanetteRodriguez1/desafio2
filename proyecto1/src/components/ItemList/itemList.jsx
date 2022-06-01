import Item from "../Item/Item"
import { memo } from "react"

const ItemList = memo(
    ({products}) => {
        return (
            products.map((prod) => <Item key= {prod.id}
                                    name= {prod.name}
                                    price={prod.price}
                                    img=  {prod.img} 
                                    id = {prod.id}/>)   
        )
    }
)

export default ItemList