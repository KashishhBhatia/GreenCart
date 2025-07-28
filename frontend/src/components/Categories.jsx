import React from 'react'
import {categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
    
    const {navigate} = useAppContext()
  return (
    <div className='mt-16'>
  <p className='text-2xl md:text-3xl font-medium text-center md:text-left'>Categories</p>

  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-4 sm:gap-6'>

    {categories.map((category, index) => (
      <div
        key={index}
        className='group cursor-pointer py-4 px-2 sm:px-3 gap-2 rounded-lg flex flex-col justify-center items-center transition-transform duration-200 hover:scale-[1.03]'
        style={{ backgroundColor: category.bgColor }}
        onClick={() => {
          navigate(`/products/${category.path.toLowerCase()}`);
          scrollTo(0, 0);
        }}
      >
        <img
          src={category.image}
          alt={category.text}
          className='max-w-20 sm:max-w-24 md:max-w-28 group-hover:scale-105 transition'
        />
        <p className='text-xs sm:text-sm font-medium text-center'>{category.text}</p>
      </div>
    ))}

  </div>
</div>

  )
}

export default Categories
