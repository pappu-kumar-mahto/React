import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../redux/cartSlice'
import { fetchProducts } from '../../redux/productSlice'
import { STATUSES } from '../../redux/productSlice'
import'./Product.css'
const Product = () => {
  const dispatch = useDispatch()

  const { data: products, status } = useSelector((state) => state.product)
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  
  const handleAdd = (product) => {
    dispatch(add(product))
  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>
  }
  if (status === STATUSES.ERROR) {
    return <h3>Something went wrong!</h3>
  }
  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
          <div className='card' key={product.id }>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>{`$ ${product.price}`}</h5>
            <button onClick={()=> handleAdd(product)} className='addBtn'>Add to Cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Product
