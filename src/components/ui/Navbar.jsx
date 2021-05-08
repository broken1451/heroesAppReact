import React, { useContext } from "react";
import { AuthContex } from "../../auth/AuthConterx";
import { Link, NavLink, useHistory } from "react-router-dom";
import { types } from "../../types/types";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContex);
  const history = useHistory();
  console.log(history);
  const logout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace('/login')
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" exact to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" exact to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" exact to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div
        style={{ marginLeft: 1880 }}
        className="navbar-collapse collapse w-100 order-3 dual-collapse2"
      >
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="nav-item nav-link btn" onClick={logout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
