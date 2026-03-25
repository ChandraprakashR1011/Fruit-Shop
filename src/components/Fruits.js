import React from 'react'
import { Footer } from "./Footer";
import Items from "./Items";
import { SeasonSpecials } from "./SeasonSpecials";
import { FruitSpecial } from "../data/Fruitdata";

export const Fruits = () => {
  return (
    <>
    <Items/>
    <SeasonSpecials data={FruitSpecial} title="Fruit Specials" />
    <Footer/>
    </>
  )
}