import React, { useContext } from "react";

import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

const PrivateRouter = ({ isAutenticated, component: Component, ...rest }) => {
  console.log(rest.location.search);
  localStorage.setItem(
    "lastPath",
    rest.location.pathname + rest.location.search
  );
  return (
    <Route
      {...rest}
      component={(props) =>
        isAutenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouter;
PrivateRouter.propTypes = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
