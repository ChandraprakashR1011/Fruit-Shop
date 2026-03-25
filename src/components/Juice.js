import React from 'react'
import { Footer } from "./Footer";
import { SeasonSpecials } from "./SeasonSpecials";
import { JuiceSpecial } from '../data/Juicedata';
import Itemjuice from './Itemjuice';


export const Juice= () => {
  return (
    <>
    <Itemjuice/>
    <SeasonSpecials data={JuiceSpecial} title="Juice Specials" />
    <Footer/>
    </>
  )
}
