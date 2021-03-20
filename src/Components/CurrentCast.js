import React from "react";
import cloudy from "../Imgs/Cloudy.png"

function CurrentCast() {
  return (
    <>
      <div className="currentCast__wrapper">
          <div className="currectCast__info-left">
              <div className="currentCast__city">New Cairo</div>
              <div className="currentCast__date">Saturday 20, 2021</div>
              <img src={cloudy} alt="Day Cast" className="currenCast__img"/>
              <div className="currentCast__imgDescription">Cloudy</div>
          </div>
          <div className="currectCast__info-right">
              <div className="currentCast__currentDegree">72</div>
              <div className="currentCast__dayDegree">
                  <div className="currentCast__dayDegree-high">81</div>
                  <div className="currentCast__dayDegree-divider">/</div>
                  <div className="currentCast__dayDegree-low">63</div>
              </div>
              <div className="currentCast__decription">Cloudy throughout the day</div>
          </div>
      </div>
    </>
  );
}

export default CurrentCast;
