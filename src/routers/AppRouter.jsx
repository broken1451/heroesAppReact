import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContex } from "../auth/AuthConterx";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoute from "./DashboardRoute";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRoute";

const AppRouter = () => {
  const { user } = useContext(AuthContex);
  console.log(user);

  return (
    // rutas principales
    <Router>
      <div>
        <Switch>
          <PublicRouter exact path="/login" component={LoginScreen}   isAutenticated={user.logged}/>
          <PrivateRouter
            path="/"
            component={DashboardRoute}
            isAutenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
