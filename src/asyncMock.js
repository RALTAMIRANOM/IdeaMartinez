//Simulación de apis 
export const products =[
    {
        id: '1',
        name: 'Hamburguesa de carne con queso',
        price: 15,
        category: 'Hamburguesas',
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
    category: 'Hamburguesas',
    img:[{id_img:'1', imglist:'https://www.bitutegrone.com/wp-content/uploads/2021/02/4.png'},
        {id_img:'2',imglist:'https://i.pinimg.com/736x/85/f3/00/85f30033bbea623cb0c4692bdec16707.jpg'}],
    stock: 200,
    description: 'Descripcion de Hamburguesa con doble carne y doble queso'
    },
    {id: '3',
    name: 'Pizza de mozzarella',
    price: 40,
    category: 'Pizzas',
    img:[{id_img:'1', imglist:'https://i0.wp.com/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?resize=681%2C434&ssl=1'}],
    stock: 100,
    description: 'Descripcion de Pizza de mozzarella'
    },
    {id: '4',
    name: 'Ramen estilo Naruto',
    price: 30,
    category: 'Ramens',
    img:[{id_img:'1', imglist:'https://sommelier.com.pe/wp-content/uploads/1-13-768x512.jpg'}],
    stock: 50,
    description: 'Descripcion de Ramen estilo Naruto'
    },
    {id: '5',
    name: 'Cerveza Pilsen',
    price: 10,
    category: 'Cervezas',
    img:[{id_img:'1', imglist:'https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/15926069/resize/540/540?1657607300'}],
    stock: 80,
    description: 'Descripcion de Cerveza Pilsen'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
        
    }
    )
}

export const getProductsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 10)
        
    }
    )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 10)
        
    }
    )
}