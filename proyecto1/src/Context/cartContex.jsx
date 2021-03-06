import { createContext, useContext, useState} from "react";

const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    //estados y funciones globales
    const [cartList, setcartList] = useState([])

    //añadir productos al carrito
    function addCart (item){
        const index = cartList.findIndex(product => product.id === item.id)
        if (index !== -1){
            const oldQty = cartList[index].quantity
            cartList[index].quantity += oldQty
            setcartList([...cartList])
            
            
        }else{
            setcartList([
                ...cartList,
                item
            ])
        }
    }

    //eliminar

    const removeItem = (id) =>{
        setcartList(cartList.filter(prod=>prod.id !==id))
    }

    //sumar cant total
    const totalQty = () =>{
        return cartList.reduce((counter,product)=> counter += product.quantity, 0)
    }

    //sumar precio total
    const totalPrice = () =>{
        return cartList.reduce((counter,product)=> counter + (product.quantity * product.price), 0)
    }


    //const eliminarItem = (id) =>{}

    const deleteCart = () =>{
        setcartList ([])
    }

    return(
        <CartContext.Provider value={ {
             cartList,
             addCart,
             deleteCart,
             removeItem,
             totalQty,
             totalPrice         
        }}>
            {children}
        </CartContext.Provider>
    )
}




































    /*function inCart(id){
        return cartList.some(product => product.id === id)
    }


    function addCart (item){
        if (inCart(item.id)){
            let i = cartList.findIndex(product => product.id === item.id)
            const newCartList = cartList
            newCartList[i].quantity += item.quantity
            setcartList(newCartList)
        }else{
            setcartList([
                ...cartList,
                item
            ])
        }
    }

    
    //const eliminarItem = (id) =>{}

    const deleteCart = () =>{
        setcartList ([])
    }

    return(
        <CartContext.Provider value={ {
             cartList,
             addCart,
             deleteCart          
        }}>
            {children}
        </CartContext.Provider>
    )
}*/

export default CartContextProvider