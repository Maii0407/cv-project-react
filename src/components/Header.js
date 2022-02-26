import React from "react";

import './styles/Header.css';

const Header = ( props ) => {
  return (
    <div className="header-container" >
      <h1>{ props.text }</h1>
    </div>
  )
};

export { Header };