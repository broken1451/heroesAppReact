import React from "react";
import { Navbar } from "../components/ui/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import DcScreen from "../components/dc/DcScreen";
import Search from "../components/search/Search";

const DashboardRoute = () => {
  return (
    // rutas hijas
    <>
      <Navbar />

      <div className='container mt-2'>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/hero/:id" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoute;
