import {useState, createContext, useEffect} from 'react'

const CartContext =createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalToPay, setTotalToPay] = useState(0)
    const [totalProductsAdded, setTotalProductsAdded] = useState(0)

    useEffect(() => {
        updateTotalProductsAdded()
        updateTotalToPay()
    }, [cart])

    console.log(cart)
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }else {
            const cartUpdated = cart.map(prod =>{
                if(prod.id === productToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })


            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }

    const getTotal  = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity * prod.price
        })

        return accu
    }


    const updateTotalProductsAdded = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        setTotalProductsAdded(count)
    }

    const updateTotalToPay = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        setTotalToPay(total)
    }

    const getProductQuantity = (id) => {
        const product = cart.find (prod => prod.id === id)

        return product?.quantity
    }



return (
    <CartContext.Provider value={{cart, addItem, getTotal, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, totalToPay, totalProductsAdded}}>
        {children}
    </CartContext.Provider>
)

}

export default CartContext