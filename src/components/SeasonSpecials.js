import React from 'react'
import FruitsCard from './FruitsCard'
import { Divider } from './Divider'




export const SeasonSpecials = ({ data, title }) => {
  return (
    <section className='w-5/6 mx-auto '>
      <Divider title={title}/>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-16 my-10 py-10 md:gap-8 sm:gap-5'>
        {
          data.map((item) => (
            <FruitsCard key={item.id} item={item}/>
          ))
        }
      </div>
    </section>
  )
}