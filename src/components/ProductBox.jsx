import React, { useContext, useState } from 'react'
import { CartContext } from '../providers/CartProvider'

export default function ProductBox({ prod }) {

 const { addToChart } = useContext(CartContext)
 const [quantity, setQuantity] = useState(1)

 const addItem = () => addToChart(prod, quantity)

  return (
    <div className='product_box'>
      <img src={prod.image} alt={prod.title} />
      <h3>{prod.title}</h3>
      <p>Price: R${prod.price}</p>
      <p>Quantity: 
        <input 
          className='imput_field' 
          type="number" 
          placeholder={1} 
          onChange={(e) => setQuantity(e.target.value)}/>
      </p>
      <button onClick= { addItem } className='btn_buy'>
        Add to Cart!
      </button>
    </div>
  )
}
