import React, { useState } from 'react'
import FruitsCard from './FruitsCard'
import Filters from './Filters'

const Items = () => {

  const [selectedItem, setSelectedItem] = useState(1);

  const [fruits] = useState([
    {
      id: 1,
      name: 'Green Grapes',
      price: 100,
      image:"/assests/fruits/1.jpeg"
    },
        {
      id:8,
      image:"/assests/fruits/8.png",
      name:'Pear',
      price:100
    },
        {
      id: 6,
      image: "/assests/fruits/6.jpeg",
      name: 'lemon',
      price: 150
    },
        {
      id:7,
      image:"/assests/fruits/7.jpeg",
      name:'Orange',
      price:150
    },
    {
      id: 2,
      image:"/assests/fruits/2.jpeg",
      name: 'Pomegranate',
      price: 200,
      offer:"7% OFF"
    },
    {
      id: 3,
      image:"/assests/fruits/3.jpeg",
      name: 'Black Grapes',
      price: 250,
      offer:"15% OFF"
    },
    {
      id: 4,
      image:"/assests/fruits/4.jpeg",
      name: 'Grape Fruit',
      price: 300,
      offer:"2% OFF"
    },
    {
      id: 5,
      image: "/assests/fruits/5.jpeg",
      name: 'Berry',
      price: 250,
      offer:"6% OFF"
    },


    {
      id:9,
      image:"/assests/fruits/9.png",
      name:'Mango',
      price:250,
      offer:"9% OFF"
    },

    {
      id:10,
      image:"/assests/fruits/10.png",
      name:'Papaya',
      price:200,
      offer:"13% OFF"
    },
    {
      id:11,
      image:"/assests/fruits/11.png",
      name:'Passion Fruit',
      price:200,
      offer:"12% OFF"
    },
    {
      id:12,
      image:"/assests/fruits/12.png",
      name:'Drango Fruit',
      price:200,
      offer:"5% OFF"
    }
  ]);

  // 🔥 Filtering logic
  let filteredFruits = fruits;

  if (selectedItem === 2) {
    // Best Seller → high price
    filteredFruits = fruits.filter(fruit => fruit.price >= 200);
  }

  if (selectedItem === 3) {
    // Special → low price
    filteredFruits = fruits.filter(fruit => fruit.price < 100);
  }

  return (
    <>
      <Filters 
        selectedItem={selectedItem} 
        setSelectedItem={setSelectedItem} 
      />

{ selectedItem === 3?"":      
      <section className='w-5/6 mx-auto grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-16 my-10 py-10 md:gap-8 sm:gap-5'>
        {
          filteredFruits.map((fruit) => (
            <FruitsCard key={fruit.id} item={fruit}/>
          ))
        }
      </section>


}
    </>
  )
}

export default Items