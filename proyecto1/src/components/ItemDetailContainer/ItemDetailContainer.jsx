import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFetch} from '../helpers/getFetch'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        const db = getFirestore()
        const dbQuery = doc(db, "products", id)
       getDoc(dbQuery)
            .then((res) => setProduct ( { id : res.id, ...res.data() } ) )
            .catch((err) => {console.log(err)})
            .finally(() => setLoader(false))

    },[id])

    return(
        <div>
            {loader ?
            <h2>Cargando</h2>
            :
                <ItemDetail product = {product} />
            }
        </div>
    )
}