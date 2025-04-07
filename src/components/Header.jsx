import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p4 bg-gray-100 shadow-md">
      <Link to="/">
        <h1 className="text-2xl font-bold">React Features</h1>
      </Link>
    </header>
  );
};

export default Header;
