import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import getHeroById from "../../selectors/getHeroById";

const HeroScreen = ({ history }) => {
  const { id } = useParams(); // parametros por la url

  const hero = useMemo(() =>  getHeroById(id), [id])
//   const hero = getHeroById(id);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const retunBack = () => {
    if (history.length <= 2) { // saber cuantos registros de navegacion hata el momento 
      history.push("/");
    } else {
      history.goBack("/");
    }
  };

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          className="img-thumbnail  animate__animated animate__fadeInLeft"  
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First aparence:</b> {first_appearance}
          </li>
        </ul>
        <h5>Character</h5>
        <p>{characters}</p>
        <button
          type="button"
          name=""
          id=""
          className="btn btn-info"
          onClick={retunBack}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
