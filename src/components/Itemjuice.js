import React, { useState } from 'react'
import FruitsCard from './FruitsCard'
import Filters from './Filters'

const Itemjuice = () => {

  const [selectedItem, setSelectedItem] = useState(1);

  const [Juice] = useState([
          {
    id: 43,
    image: "/assests/juice/12.png",
    name: "Banana",
    price: 50,
    },  {
    id: 53,
    image: "/assests/juice/10.png",
    name: "Gova",
    price: 80,
    },  {
    id: 48,
    image: "/assests/juice/5.png",
    name: "Graps",
    price: 90,
    }, {
    id: 45,
    image: "/assests/juice/2.png",
    name: "WaterMelon",
    price: 50,
    },   {
    id: 44,
    image: "/assests/juice/1.png",
    name: "Orange",
    price: 100,
    offer: "20% OFF"
    },      {
    id: 46,
    image: "/assests/juice/3.png",
    name: "Apple",
    price: 150,
    offer: "10% OFF"
    },    {
    id: 47,
    image: "/assests/juice/4.png",
    name: "Mango",
    price: 100,
    offer:"8% OFF"
    },     {
    id: 50,
    image: "/assests/juice/7.png",
    name: "Pomegranate",
    price: 110,
    offer: "15% OFF"
    }, 
  ]);

  // 🔥 Filtering logic HI
  let filteredJuice = Juice;

  if (selectedItem === 2) {
    // Best Seller → high price
    filteredJuice = Juice.filter(Juice => Juice.price >= 100);
  }

  if (selectedItem === 3) {
    // Special → low price
    filteredJuice = Juice.filter(Juice => Juice.price < 100);
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
          filteredJuice.map((Juice) => (
            <FruitsCard key={Juice.id} item={Juice}/>
          ))
        }
      </section>


}
    </>
  )
}

export default Itemjuice;
