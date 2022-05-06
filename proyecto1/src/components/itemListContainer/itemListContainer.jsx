const ItemListContainer = ({greeting="greeting"}) => {
    function saludoAlert(){
        alert("Bienvenido")
    }
  return (
    <div className="contenedorClick">
        {greeting}
        <button onClick ={saludoAlert} >Click</button>
    </div>
  )
}

export default ItemListContainer
