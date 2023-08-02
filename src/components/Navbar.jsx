import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav">
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Navbar;
