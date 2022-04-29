import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllRoutesArray } from "./AllRoutes";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {AllRoutesArray.map((route, index) => {
          return <Route key={index} path={route.path} exact={route.exact} element={route.comp} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
