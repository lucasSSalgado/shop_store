import { createContext, useState } from 'react'
import { Product } from '../routers/Shop'

const CartContext = createContext()
const CartProvider = ({ children }) => {

    const [cartItens, setCartItens] = useState([])
    const addToChart = (obj, quantity) => {
        const updatedCartItems = [...cartItens]
        const existingCartItem = updatedCartItems.find(item => item.id === obj.id)
        if (existingCartItem) {
            existingCartItem.addQuantity(quantity)
        } else {
            updatedCartItems.push(new Product(
                obj.id, obj.title, obj.price,
                obj.description, obj.category, obj.image, quantity
            ))
        }

        setCartItens(updatedCartItems)
    }
    const removeItem = (obj) => {
        const actualItem = [...cartItens]
        const newItens = actualItem.filter(item => item.id !== obj.id) 
        setCartItens(newItens)
    }
    const clearCart = () => setCartItens([])

    return(
        <CartContext.Provider value={{cartItens, addToChart, clearCart, removeItem}}>
            { children }
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider  }