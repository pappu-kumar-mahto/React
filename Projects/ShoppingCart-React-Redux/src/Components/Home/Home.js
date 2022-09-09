import React from 'react'
import Product from '../Product/Product'
import './Home.css'
const Home = () => {
  return (
    <div className='homeContainer'>
          <h2 className='heading'>Welcome to Redux Toolkit Store </h2>
          <section>
              <h3>Products</h3>
              <Product/>
          </section>
    </div>
  )
}

export default Home
