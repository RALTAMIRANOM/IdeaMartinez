import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import {useState, useEffect} from 'react'
import { getProducts } from '../../asyncMock';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect (() => {
        getProducts().then(products => {
            setProducts(products)
        })

    },[])

    const handleOnAdd = (quantity) => {
        console.log(`la cantidad agregada es: ${quantity}`)
    }

    // const productsComp = products.map(prod => 
    //     <li key={prod.id}>{prod.name}</li>
    //     )
    // console.log(productsComp)
    return (
        // <div className="ItemListContainer">
        <>
            <h1>{greeting}</h1>
            
            {/* <ul> */}
                {/* {productsComp} */}
                {/* {products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul> */}
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
        </>
            
        // </div>
    )
}

export default ItemListContainer;