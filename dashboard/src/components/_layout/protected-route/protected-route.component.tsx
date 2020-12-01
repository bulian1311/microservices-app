import React from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";

type TProps = RouteProps;

const ProtectedRoute = ({ ...rest }: TProps) => {
  //const isAuthenticated = useSelector(selectIsAuth);
  const isAuth = true;

  return isAuth ? <Route {...rest} /> : <Redirect to={{ pathname: "/" }} />;
};

export default ProtectedRoute;
