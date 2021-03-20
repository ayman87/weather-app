import React from "react";
import cloudy from "../Imgs/Cloudy.png";
import clear from "../Imgs/Sunny.png";

function CurrentCast(props) {

  const weatherIcons = {
    "clear-day": clear,
    "clear-night": clear,
    "partly-cloudy-night": cloudy,
    "partly-cloudy-day": cloudy,
    cloudy: cloudy,
    wind: cloudy,
  };

  return (
    <>
      <div className="currentCast__wrapper">
        <div className="currectCast__info-left">
          <div className="currentCast__city">New Cairo</div>
          <div className="currentCast__date">
            {new Date(props.fetchedData.currently.time * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            })}
            , {new Date(props.fetchedData.currently.time * 1000).getDate()}
            {new Date(props.fetchedData.currently.time * 1000).getFullYear()}
          </div>
          <img
            src={weatherIcons[props.fetchedData.currently.icon]}
            alt={props.fetchedData.currently.icon}
            className="currenCast__img"
          />
          <div className="currentCast__imgDescription">
            {props.fetchedData.currently.summary}
          </div>
        </div>
        <div className="currectCast__info-right">
          <div className="currentCast__currentDegree">
            {Math.floor(props.fetchedData.currently.temperature)}
          </div>
          <div className="currentCast__dayDegree">
            <div className="currentCast__dayDegree-high">
              {Math.floor(props.fetchedData.daily.data[0].temperatureHigh)}
            </div>
            <div className="currentCast__dayDegree-divider">/</div>
            <div className="currentCast__dayDegree-low">
              {Math.floor(props.fetchedData.daily.data[0].temperatureLow)}
            </div>
          </div>
          <div className="currentCast__decription">
            {props.fetchedData.daily.data[0].summary}
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentCast;
