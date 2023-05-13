import React from "react";
// import { matchRoutes } from "react-router-config";
import { NavLink, matchRoutes } from "react-router-dom";
import navigations from "./navigation";

const BreadCrumb = ({ locationPath, onMatchedRoutes }) => {
  let matchedRoutes = matchRoutes(navigations, locationPath);

  if (typeof onMatchedRoutes === 'function') {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }

  console.log(locationPath)

  return (
    <nav>
      <ul className="breadcrumb">
        {matchedRoutes.map((matchRoute, i) => {
          const { path, breadcrumbName } = matchRoute.route;
          const isActive = path === locationPath;

          return isActive ? (
            <li key={i} className="breadcrumb-item active">
              {breadcrumbName}
            </li>
          ) : (
            <li key={i} className="breadcrumb-item">
              <NavLink to={path}>{breadcrumbName} </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default BreadCrumb;
