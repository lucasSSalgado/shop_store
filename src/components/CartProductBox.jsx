import { CartContext } from '../providers/CartProvider'
import { useContext } from 'react'

export default function CartProductBox({ props }) {

    const { removeItem } = useContext(CartContext)
    const remove = () => {
        removeItem(props)
    }

    return(
        <div className="cart-product-box">
            <h3>{props.title}</h3>
            <img src={props.image}></img>
            <p>R$ {props.price}</p>
            <p>Quantity: {props.quantity}</p>
            <button onClick={ remove }>Remove Item</button>
        </div>
    )
}