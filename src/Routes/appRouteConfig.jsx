import React from "react";
import HomeScreen from "../Screen/Home";
import { InternalRoute } from "../Utils/internalRoute";
import TodoScreen from "../Screen/Todo";
import MoviesScreen from "../Screen/Movies";

export const RouteConfig = [
  {
    path: InternalRoute.Home,
    element: <HomeScreen />,
    isProtectedRoute: false,
    allowedLayout: "admin",
    allowedRoles: ["admin"],
  },
  {
    path: InternalRoute.Todo,
    element: <TodoScreen />,
    isProtectedRoute: false,
    allowedLayout: "admin",
    allowedRoles: ["admin"],
  },
  {
    path: InternalRoute.Movies,
    element: <MoviesScreen />,
    isProtectedRoute: false,
    allowedLayout: "admin",
    allowedRoles: ["admin"],
  },
];

