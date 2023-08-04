import { useContext } from 'react'
import { CartContext } from '../providers/CartProvider'
import CartProductBox from '../components/CartProductBox'

export default function Chart() {

  const { cartItens, clearCart } = useContext(CartContext)
  const claerAll = () => clearCart()
  let totalPrice = 0

  for (let i = 0; i < cartItens.length; i++) {
    totalPrice +=  cartItens[i].price * cartItens[i].quantity
  }

  return(
    <>
      <div className='cart_area'>
        {
          cartItens.map(item => {
            return (
              <>
                <CartProductBox props={item} />
              </>           
            )
          })
        }  
          
      </div>
      <p className='totalPrice'>Subtotal - R$ {totalPrice}</p> 
      <button className='clear-btn' onClick={ claerAll }>Clear Cart</button>
    </>    
  )
}