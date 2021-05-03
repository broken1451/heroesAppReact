import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { heroes } from "../../data/hero";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import getHeroByName from "../../selectors/getHeroByName";

const Search = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  //   console.log({q});

  const [stateForm, inputChange] = useForm({
    termino: q,
  });

  const { termino } = stateForm;
  // const heroFiltered = useMemo(() =>  getHeroByName(termino), [q])
  const heroFiltered = useMemo(() => getHeroByName(q), [q]);

  const submit = (e) => {
    e.preventDefault();
    history.push(`?q=${termino}`);
    //   console.log({termino});
  };

  return (
    <div>
      <h1>Search hero</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form onSubmit={submit}>
            <input
              type="text"
              name="termino"
              className="form-control"
              placeholder="search"
              autoComplete="off"
              value={termino}
              onChange={inputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-primary w-100"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {q == "" ? <div className="alert alert-info">Search hero</div> : null}
          {q !== "" && heroFiltered.length === 0 ? (
            <div className="alert alert-danger">
              No hay heroes con el nombre {q}
            </div>
          ) : null}

          {heroFiltered.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
