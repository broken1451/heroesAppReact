import React, { useContext } from "react";
import { AuthContex } from "../../auth/AuthConterx";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContex);

  const login = () => {
    // console.log('click');
    // navegar hacia donde quemos al hacer click like router.nvigate de angular
    // history.push('/')
    // const action = {
    //   type: types.login,
    // };
    const lastPath = localStorage.getItem('lastPath')  || '/'
    dispatch({
      type: types.login,
      payload: {
        name: "Adrian",
      },
    });
    history.replace(lastPath); // reemplazar lo q no se visito en la historia
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        type="button"
        name=""
        id=""
        className="btn btn-primary"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
