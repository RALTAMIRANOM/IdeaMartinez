//Simulación de apis 
export const products =[
    {
        id: '1',
        name: 'Hamburguesa de carne con queso',
        price: 15,
        category: 'HAMBURGUESA',
        img: [{id_img:'1',                
            imglist:'https://simplementerecetas.com/wp-content/uploads/2021/03/Hamburguesas-de-queso-en-la-freidora-de-aire.png'},
            {id_img:'2',
            imglist:'https://okdiario.com/img/recetas/2016/11/15/hamburguesa-con-queso-azul-y-oregano-o-blue-moon-burget.jpg'}],
        stock: 100,
        description: 'Pan artesanal realizado en casa con jugosa hamburguesa con queso cheddar y ensalada'
    },
    {id: '2',
    name: 'Hamburguesa con doble carne y doble queso',
    price: 30,
    category: 'HAMBURGUESA',
    img:[{id_img:'1', imglist:'https://www.cocinayvino.com/wp-content/uploads/2018/02/64513894_ml-696x464.jpg'}],
    stock: 200,
    description: 'Descripcion de Hamburguesa con doble carne y doble queso'
    },
    {id: '3',
    name: 'Pizza de mozzarella',
    price: 40,
    category: 'PIZZA',
    img:[{id_img:'1', imglist:'https://i0.wp.com/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?resize=681%2C434&ssl=1'}],
    stock: 100,
    description: 'Descripcion de Pizza de mozzarella'
    },
    {id: '4',
    name: 'Ramen estilo Naruto',
    price: 30,
    category: 'RAMEN',
    img:[{id_img:'1', imglist:'https://sommelier.com.pe/wp-content/uploads/1-13-768x512.jpg'}],
    stock: 50,
    description: 'Descripcion de Ramen estilo Naruto'
    },
    {id: '5',
    name: 'Cerveza Pilsen',
    price: 10,
    category: 'CERVEZA',
    img:[{id_img:'1', imglist:'https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/15926069/resize/540/540?1657607300'}],
    stock: 80,
    description: 'Descripcion de Cerveza Pilsen'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
        
    }
    )
}

export const getProductsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
        
    }
    )
}