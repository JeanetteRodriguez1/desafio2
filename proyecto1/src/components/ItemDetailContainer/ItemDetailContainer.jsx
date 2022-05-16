import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFetch} from '../helpers/getFetch'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        getFetch(id)
            .then((res) => {setProduct(res)})
            .catch((err) => {console.log(err)})
            .finally(() => setLoader(false))

    },[])

    return(
        <div>
            {loader ?
            <h2>Loading</h2>
            :
                <ItemDetail product = {product} />
            }
        </div>
    )
}