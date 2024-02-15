import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ destination }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : { destination };
};

export default PrivateRoute;
