import React from "react";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <img
        src={
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Movie DB"
      />
    </header>
  );
};

export default Header;
