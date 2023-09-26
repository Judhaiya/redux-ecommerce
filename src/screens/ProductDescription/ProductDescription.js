import React from 'react'
import { useSelector } from 'react-redux'

const ProductDescription = () => {
   const productDetails = useSelector(state=>state.products.singleProductList)
  return (
    <div>ProductDescription</div>
  )
}

export default ProductDescription