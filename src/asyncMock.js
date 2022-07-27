//Simulación de apis 
const products =[
    {
        id: '1',
        name: 'Hamburguesa de carne con queso',
        price: 15,
        category: 'hamburguesa',
        img:'https://simplementerecetas.com/wp-content/uploads/2021/03/Hamburguesas-de-queso-en-la-freidora-de-aire.png',
        stock: 100,
        description: 'Descripcion de Hamburguesa de carne con queso'
    },
    {id: '2',
    name: 'Hamburguesa con doble carne y doble queso',
    price: 30,
    category: 'hamburguesa',
    img:'https://www.cocinayvino.com/wp-content/uploads/2018/02/64513894_ml-696x464.jpg',
    stock: 200,
    description: 'Descripcion de Hamburguesa con doble carne y doble queso'
    },
    {id: '3',
    name: 'Pizza de mozzarella',
    price: 40,
    category: 'pizza',
    img:'https://i0.wp.com/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?resize=681%2C434&ssl=1',
    stock: 100,
    description: 'Descripcion de Pizza de mozzarella'
    },
    {id: '4',
    name: 'Ramen estilo Naruto',
    price: 30,
    category: 'ramen',
    img:'https://sommelier.com.pe/wp-content/uploads/1-13-768x512.jpg',
    stock: 50,
    description: 'Descripcion de Ramen estilo Naruto'
    },
    {id: '5',
    name: 'Cerveza Pilsen',
    price: 10,
    category: 'cerveza',
    img:'https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/15926069/resize/540/540?1657607300',
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
