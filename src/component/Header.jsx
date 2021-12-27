import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const favorite = useSelector(state => state.favoriteReducer)  
  return(
    <div className="header-container">      
      <nav className="nav-bar">
        <Link to={"./"} className="logo-header"></Link>
        <Link to={"toys"} className="switch-main-page active-link">Игрушки</Link>
        <Link to={"tree"} className="switch-favorites-page">Ёлка</Link>
      </nav>
      <div className="header-controls"> 
        <div className="select"><span>{favorite.favorite.length}</span></div>
      </div>      
    </div>
  )
}

export {Header}