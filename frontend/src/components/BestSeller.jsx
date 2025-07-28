import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className='mt-16 px-3 sm:px-4 md:px-0'>
      <p className='text-2xl md:text-3xl font-medium text-center md:text-left'>Best Sellers</p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mt-6'>
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  )
}

export default BestSeller
