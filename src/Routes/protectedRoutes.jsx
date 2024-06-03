import React from "react";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../Components/Layout";

const protectedRoutes = ({
  element,
  allowedLayout,
  isProtectedRoute,
  userID,
  allowedRoles,
}) => {
  const checkLayoutType = (element) => {
    switch (allowedLayout) {
      case "main":
        return <DefaultLayout>{element}</DefaultLayout>;
      case "admin":
        return <DefaultLayout>{element}</DefaultLayout>;
      default:
        return element;
    }
  };

  const checkAuthorization = (routeElement) => {
    const userRole = localStorage.getItem("Role");

    if (userID && userRole && allowedRoles.includes(userRole)) {
      return checkLayoutType(routeElement);
    }

    return <Navigate to={userID ? "/unauthorized" : "/login"} />;
  };

  return isProtectedRoute ? (
    checkAuthorization(element)
  ) : (
    <>{checkLayoutType(element)}</>
  );
};

export default protectedRoutes;

