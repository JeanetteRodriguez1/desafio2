const products = [
    {id: "1", category: "Camisa" ,name: "Camisa Gasa", price:100, img: "https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?s=612x612"},
    {id: "2", category: "Camisa" ,name: "Camisa de Jeans", price:200, img: "https://media.istockphoto.com/photos/modern-millennial-woman-with-pink-hair-picture-id1140764346?s=612x612"},
    {id: "3", category: "Camisa" ,name: "Camisa de Algodon", price:300, img: "https://media.istockphoto.com/photos/attractive-afro-american-woman-picture-id807375326?s=612x612"},
    {id: "4", category: "Campera" ,name: "Campera de Simil Cuero", price:100, img: "https://media.istockphoto.com/photos/modern-woman-picture-id696869378?s=612x612"},
    {id: "5", category: "Campera" ,name: "Campera de Jeans", price:200, img: "https://media.istockphoto.com/photos/jean-jacket-isolated-on-white-front-and-back-views-ready-for-clipping-picture-id1352728757?s=612x612"},
    {id: "6", category: "Campera" ,name: "Campera Puffer", price:300, img: "https://media.istockphoto.com/photos/strange-woman-adjusting-jacket-picture-id1157459060?s=612x612"},
    {id: "7", category: "Jeans" ,name: "Jeans Chupin", price:100, img: "https://media.istockphoto.com/photos/smiling-woman-leaning-on-white-wall-with-bag-picture-id857963320"},
    {id: "8", category: "Jeans" ,name: "Jeans Mom", price:200, img: "https://media.istockphoto.com/photos/portrait-of-young-woman-standing-alone-in-public-park-on-sunny-day-picture-id1305813179?s=612x612"},
    {id: "9", category: "Jeans" ,name: "Jeans Slouchy", price:300, img: "https://media.istockphoto.com/photos/cute-girl-in-the-city-eating-icecream-picture-id1129872085?s=612x612"},

    { 
    id: "1", 
    category: "Camisa",    
    name: "Camisa de Gasa",     
    price:100, 
    stock:8, 
    img: "https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?s=612x612"
    },
    { 
    id: "2", 
    category: "Camisa",    
    name: "Camisa de Jeans",     
    price:200, 
    stock:8, 
    img: "https://media.istockphoto.com/photos/modern-millennial-woman-with-pink-hair-picture-id1140764346?s=612x612"
    },
    { 
    id: "3", 
    category: "Camisa",    
    name: "Camisa de Algodon",     
    price:300, 
    stock:10, 
    img: "https://media.istockphoto.com/photos/attractive-afro-american-woman-picture-id807375326?s=612x612"
    },
    { 
    id: "1", 
    category: "Campera",    
    name: "Campera de Simil cuero",     
    price:100, 
    stock:7, 
    img: 
    },




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
