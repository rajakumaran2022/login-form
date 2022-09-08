import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark py-2">
        <Link to="/" className="navbar-brand">
          Contacts App
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
