import React, { useState } from "react";

function Switch() {

  const [active, setActive] = useState(true);

  return (
    <>
      <div className="switch__wrapper">
        <ul className="switch__list">
          <li onClick={()=>setActive(!active)} className={`switch__list-item ${active?"":"active"}`}>C</li>
          <li className="switch__list-divider">|</li>
          <li onClick={()=>setActive(!active)} className={`switch__list-item ${active?"active":""}`}>F</li>
        </ul>
      </div>
    </>
  );
}

export default Switch;
