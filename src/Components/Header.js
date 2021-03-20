import React from "react";
import Switch from "./Switch";


function Header() {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="logo">InstaWeather</div>
            <Switch></Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
