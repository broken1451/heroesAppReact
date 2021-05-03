import React from "react";
import { heroes } from "../data/hero";

const getHeroByName = (name = "") => {
  if (name == "") {
    return [];
  }
  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};

export default getHeroByName;
