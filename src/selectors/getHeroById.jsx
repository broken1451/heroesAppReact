import React from "react";
import { heroes } from "../data/hero";

const getHeroById = (id) => {
  

  return heroes.find(hero => hero.id === id )
};

export default getHeroById;