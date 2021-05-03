import React from "react";
import { heroes } from "../data/hero";

const getHeroByPublisher = (publisher) => {
  const validpublisher = ["DC Comics", "Marvel Comics"];
  if (!validpublisher.includes(publisher)) {
      throw new Error('publisher no es correcto')
  }

  return heroes.filter(hero => hero.publisher === publisher )
};

export default getHeroByPublisher;
