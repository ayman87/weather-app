import React, { useState } from "react";
import useAxios from "axios-hooks";
import CastTabs from "./CastTabs";
import CurrentCast from "./CurrentCast";
function Switch() {
  const [active, setActive] = useState(true);


  const apiKey = "a177f8481c31fa96c3f95ad4f4f84610";
  const lat = "30.8220";
  const lon = "37.7510";
  const proxy = "https://cors-anywhere.herokuapp.com/";
  let url = "";
  let urlFhern = `${proxy}https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;
  let urlCel = `${proxy}https://api.darksky.net/forecast/${apiKey}/${lat},${lon}?units=si`;
  if (!active) {
    url = urlCel;
  } else {
    url = urlFhern;
  }
  const [{ data, loading, error }, refetch] = useAxios(url);
  function handleClick(){
    setActive(!active);
    refetch(url)
  }

    
  if (loading) return <p className="loadingTabs">Loading...</p>;
  if (error) return <p className="errorTabs">Error!</p>;

  return (
    <>
      <div className="switch__wrapper">
        <ul className="switch__list">
          <li
            onClick={() => handleClick()}
            className={`switch__list-item ${active ? "" : "active"}`}
          >
            C
          </li>
          <li className="switch__list-divider">|</li>
          <li
            onClick={() => handleClick()}
            className={`switch__list-item ${active ? "active" : ""}`}
          >
            F
          </li>
        </ul>
      </div>
      <CurrentCast fetchedData={data}></CurrentCast>
      <CastTabs fetchedData={data}></CastTabs>
    </>
  );
}

export default Switch;
