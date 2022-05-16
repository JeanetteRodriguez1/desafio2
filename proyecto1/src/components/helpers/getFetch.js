const products = [
    {id: "1", category: "Camisa" ,name: "Camisa", price:100, img: "https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?s=612x612"},
    {id: "2", category: "Camisa" ,name: "Camisa", price:200, img: "https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?s=612x612"},
    {id: "3", category: "Camisa" ,name: "Camisa", price:300, img: "https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?s=612x612"},
    
    {id: "4", category: "Campera" ,name: "Campera", price:100, img: "https://media.istockphoto.com/photos/young-woman-wearing-sterile-face-mask-picture-id1210830201"},
    {id: "5", category: "Campera" ,name: "Campera", price:200, img: "https://media.istockphoto.com/photos/young-woman-wearing-sterile-face-mask-picture-id1210830201"},
    {id: "6", category: "Campera" ,name: "Campera", price:300, img: "https://media.istockphoto.com/photos/young-woman-wearing-sterile-face-mask-picture-id1210830201"},
    {id: "7", category: "Jeans" ,name: "Jeans", price:100, img: "https://media.istockphoto.com/photos/smiling-woman-leaning-on-white-wall-with-bag-picture-id857963320"},
    {id: "8", category: "Jeans" ,name: "Jeans", price:200, img: "https://media.istockphoto.com/photos/smiling-woman-leaning-on-white-wall-with-bag-picture-id857963320"},
    {id: "9", category: "Jeans" ,name: "Jeans", price:300, img: "https://media.istockphoto.com/photos/smiling-woman-leaning-on-white-wall-with-bag-picture-id857963320"},
]

export const getFetch = (id)=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const query = id
            ? products.find(product=> product.id === id)
            : products
            resolve (query)
        },2000)
    })
}
