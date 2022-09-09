import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../services/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, getDoc, documentId, writeBatch } from "firebase/firestore"
import { Navigate, useNavigate } from 'react-router-dom'
import { Box, FormControl, InputLabel, TextField } from "@mui/material"

const Order = () => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const [nameUser, setNameUser] = useState('')
    const [lastNameUser, setLastNameUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')
    const [adressUser, setAdressUser] = useState('')
    
    const { cart, getQuantity, getTotal, clearCart} = useContext(CartContext)
    const navigate = useNavigate()
    const totalQuantity = getQuantity()
    const total = getTotal()


    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName:nameUser,
                    lastName: lastNameUser,
                    phone:phoneUser,
                    adress:adressUser
                },
                items: cart,
                totalQuantity: totalQuantity,
                total: total,
                date: new Date()
            }
    
            // const orderRef = collection(db,'orders')
            // addDoc(orderRef, objOrder).then(response => {
            //     console.log(response)
            // })
    
            // const orderRef = doc(db, 'products', 'codigo del producto a actualizar')
            // updateDoc(orderRef, { stock: 100}).then(response => {
            //     console.log(response)
            // })
    
            const ids = cart.map(prod => prod.id)
            console.log(ids)
    
            const productsRef = collection(db, 'products')
            
            const prdouctsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(),'in', ids)))
    
            const { docs } = prdouctsAddedFromFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                //console.log( orderAdded.id )
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
                
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error){
            console.log(error)
        } finally {
            setIsLoading(false)
        }
        
    }

    if(isLoading){
        return <h1> Se esta generando su orden</h1>
    }

    if (orderCreated){
        return <h1>La orden fue creada correctamente, sera redirigido al listado de productos en 3 segundos</h1>
    }
//inputs correspondientes para sincronizarlos con lso estados
    return (
        <>
            <h1>
                Orden de Compra:
            </h1>
            <h2><u>Formulario</u></h2> 
            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}>
                <TextField 
                helperText="Ingresar su Nombre"
                id="demo-helper-text-misaligned"
                label="Nombre"
                value={nameUser} onChange={(e) => setNameUser(e.target.value)}/>

                <TextField 
                helperText="Ingresar su Apellido"
                id="demo-helper-text-misaligned"
                label="Apellido"
                value={lastNameUser} onChange={(e) => setLastNameUser(e.target.value)}/>
            
            </Box>

            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}>
                <TextField 
                helperText="Ingresar su telefono"
                id="demo-helper-text-misaligned"
                label="Telefono"
                value={phoneUser} onChange={(e) => setPhoneUser(e.target.value)} />

                <TextField 
                helperText="Ingresar su dirección"
                id="demo-helper-text-misaligned"
                label="Dirección"
                value={adressUser} onChange={(e) => setAdressUser(e.target.value)}/>
            
            </Box>
            
            <button className="Option" onClick={createOrder}> Generar Orden</button>
        </>
    )
}

export default Order