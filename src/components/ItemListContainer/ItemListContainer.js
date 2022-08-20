import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import {useState, useEffect} from 'react'
// import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getDocs,collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase';
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect (() => {

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId).then(products => {
        //     setProducts(products)
        // }).catch( error => {
        //     console.log(error)
        // })
        const collectionRef = !categoryId
            ? collection(db,'products')
            : query(collection(db,'products'), where('category', '==', categoryId))


        getDocs(collectionRef).then(response => {
            // console.log(response)
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                // console.log(data)
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        })
        

        // if(!categoryId){
        //     getProducts().then(product => {
        //         setProduct(product)
        //     })
        // }else{
        //     getProductsByCategory(categoryId).then(product => {
        //         setProduct(product)
        //     })
        // }

    },[categoryId])
    // const handleOnAdd = (quantity) => {
    //     console.log(`la cantidad agregada es: ${quantity}`)
    // }

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
            {/* <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/> */}
        </>
            
        // </div>
    )
}

export default ItemListContainer;