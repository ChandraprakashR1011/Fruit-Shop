import React from 'react'
import { Footer } from "./Footer";
import ItemsVeg from "./ItemsVeg";
import { SeasonSpecials } from "./SeasonSpecials";
import { VegSpecial } from "../data/Vegdata";


export const Vegetables = () => {
  return (
    <>
    <ItemsVeg/>
    <SeasonSpecials data={VegSpecial} title="Vegetable Specials" />
    <Footer/>
    </>
  )
}
