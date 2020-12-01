import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "../components/_layout/protected-route/protected-route.component";

const Admin = lazy(() => import("../pages/admin/admin.component"));
const Auth = lazy(() => import("../pages/auth/auth.component"));

const App = () => {
  return (
    <Switch>
      <Suspense fallback={"Загрузка..."}>
        <Route exact path="/" component={Auth} />
        <ProtectedRoute exact path="/admin" component={Admin} />
      </Suspense>
    </Switch>
  );
};

export default App;
