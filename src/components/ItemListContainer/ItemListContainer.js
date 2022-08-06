import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import {useState, useEffect} from 'react'
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
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
            <ItemList products = {products}/>
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
        </>
            
        // </div>
    )
}

export default ItemListContainer;