import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import axios from 'axios'


import jew from "../../../jew.json"


const ProductList = ({data, addtocart, addtofav}) => {




  return (
    <div className='prodlist'>
      <h1>Trending Products</h1>
      <div className="prods">

      {
        data && data.map(item =>{
            return (
                <ProductItem key={item.id} item={item} addtocart={addtocart} addtofav={addtofav}/>
            )
        } )
      
&&
         
        jew.jewelry.map(item =>{
            return (
                <ProductItem key={item.id} item={item} addtocart={addtocart} addtofav={addtofav}/>
            )
        } )
      }
      </div>
    </div>
  )
}

export default ProductList
