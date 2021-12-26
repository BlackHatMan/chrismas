import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return(
    <div className="header-container">      
      <nav className="nav-bar">
        <Link to={"./"} className="logo-header"></Link>
        <Link to={"toys"} className="switch-main-page active-link">Игрушки</Link>
        <Link to={"tree"} className="switch-favorites-page">Ёлка</Link>
      </nav>
      <div className="header-controls">
        <input type="search" className="search" autoComplete="off"/>
        <div className="select"><span>0</span></div>
      </div>      
    </div>
  )
}

export {Header}