import React, { useEffect, useReducer } from "react";
import { AuthContex } from "./auth/AuthConterx";
import authReducer from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeroApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContex.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContex.Provider>
  );
};

export default HeroApp;
