import React, { useState } from 'react'
import FruitsCard from './FruitsCard'
import Filters from './Filters'

const ItemsVeg = () => {

  const [selectedItem, setSelectedItem] = useState(1);

  const [Veg] = useState([
    {
      id:20 ,
      name:'Carrot',
      price: 100,
      image:"/assests/vegetables/1.png"
    },
    {
      id: 21,
      image:"/assests/vegetables/2.png",
      name: 'Beans',
      price: 200
    },
    {
      id: 22,
      image:"/assests/vegetables/3.png",
      name: 'Potato',
      price: 250
    },
    {
      id: 23,
      image:"/assests/vegetables/4.png",
      name: 'Tomato',
      price: 300
    },
    {
      id: 24,
      image: "/assests/vegetables/5.png",
      name: 'Ladyfinger',
      price: 250
    },
    {
      id: 25,
      image:  "/assests/vegetables/6.png",
      name: 'Cabage',
      price: 150
    },
    {
      id:26,
      image: "/assests/vegetables/7.png",
      name:'Onion',
      price:200
    },
    {
      id:27,
      image: "/assests/vegetables/8.png",
      name:'Broccoli',
      price:250
    },
    {
      id:28,
      image: "/assests/vegetables/9.png",
      name:'Beetroot',
      price:100
    },
    {
      id:29,
      image: "/assests/vegetables/10.png",
      name:'Drumstick',
      price:200
    },
    {
      id:30,
      image: "/assests/vegetables/11.png",
      name:'Pumpkin',
      price:200
    },
    {
      id:31,
      image: "/assests/vegetables/12.png",
      name:'Bell pepper',
      price:200
    }
  ]);

  // 🔥 Filtering logic
  let filteredVeg = Veg;

  if (selectedItem === 2) {
    // Best Seller → high price
    filteredVeg = Veg.filter(Veg => Veg.price >= 200);
  }

  if (selectedItem === 3) {
    // Special → low price
    filteredVeg = Veg.filter(Veg => Veg.price < 100);
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
          filteredVeg.map((veg) => (
            <FruitsCard key={veg.id} item={veg}/>
          ))
        }
      </section>


}
    </>
  )
}

export default ItemsVeg;
