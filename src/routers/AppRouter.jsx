import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoute from "./DashboardRoute";


const AppRouter = () => {
  return (
    // rutas principales
    <Router>
      <div>
        <Switch>
            <Route exact path='/login' component={LoginScreen} />
            <Route  path='/' component={DashboardRoute} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
