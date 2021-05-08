import React, { useContext } from "react";

import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";


const PublicRouter = ({ isAutenticated, component: Component, ...rest }) => {
 


  return (
    <Route
      {...rest}
      component={(props) =>
        !isAutenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRouter;
PublicRouter.propTypes = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
