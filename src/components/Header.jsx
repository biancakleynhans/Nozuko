import React from "react";
import { NavLink } from "react-router-dom";
import { AllRoutesObj } from "../routes/AllRoutes";

export default function Header() {
  return (
    <>
      <NavLink to={AllRoutesObj.tasks.path}>{AllRoutesObj.tasks.name}</NavLink>
      <NavLink to={AllRoutesObj.creator.path}>{AllRoutesObj.creator.name}</NavLink>
    </>
  );
}
