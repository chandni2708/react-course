import React, { Fragment, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import { RouteConfig } from "./appRouteConfig";
import { InternalRoute } from "../Utils/internalRoute";

const AppRouter = () => {
  const userID = localStorage.getItem("userID") || null;
  const match = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (match.pathname === InternalRoute.Logout) {
      removeLocalStorageAccountInfo();
      <Link to={InternalRoute.Login}></Link>;
    }
  }, [match]);
  return (
    <>
      <Fragment>
        <Routes>
          {RouteConfig?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute
                  allowedLayout={route.allowedLayout}
                  isProtectedRoute={route.isProtectedRoute}
                  userID={userID}
                  element={route.element}
                  allowedRoles={route.allowedRoles}
                />
              }
            />
          ))}
        </Routes>
      </Fragment>
    </>
  );
};

export default AppRouter;

