import React from 'react'
import NewsCard from './newscard';

const CategoryCard = ({ category, multipleNews }) => {
  return (
    <div className=' bg-gray-700 border-2 rounded-xl shadow-lg divide-x-2 flex flex-col p-4 gap-6'>
      <h4 className='font-extrabold uppercase text-secondary mb-1'>{category}</h4>
      {
        multipleNews?.map(({ description, image, source, title }) => <>
        <hr className='text-secondary font-light'/> <NewsCard description={description} image={image} source={source} title={title} /></>)
      }
    </div>
  )
}

export default CategoryCard;