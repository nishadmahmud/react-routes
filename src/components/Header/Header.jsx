import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h3>Header</h3>
      <nav className="space-x-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/mobiles"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Mobiles
        </NavLink>
        <NavLink
          to="/laptops"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Laptops
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/users2"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Users2
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
