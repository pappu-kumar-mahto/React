import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../redux/cartSlice'
import './Cart.css'
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)
  
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  if (products.length === 0) {
    return <h3>No Items in cart</h3>
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          products.map((product) => (
            <div className='cartCard' key={product.id}>
              <img src={product.image} alt={product.title} />
              <h5>{products.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
