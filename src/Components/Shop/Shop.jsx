import React from 'react'
import Hero from '../Hero/Hero'
import ProductList from '../ProductList/ProductList'

const Shop = ({data, addtocart, addtofav}) => {
  return (
    <div className='shop'>
      {/* <br></br>
      <br />
      <br /> */}
    <Hero />
    <ProductList data={data} addtocart={addtocart} addtofav={addtofav} />
    </div>
  )
}

export default Shop
