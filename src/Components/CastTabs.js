import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import cloudy from "../Imgs/Cloudy.png";
import clear from "../Imgs/Sunny.png";

function CastTabs(props) {

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
      <div className="CastTabs__container">
        <Tabs className="castTabs__wrapper">
          <TabList className="castTabs__tabs">
            <Tab className="castTabs__tab">Hourly</Tab>
            <Tab className="castTabs__tab">Daily</Tab>
          </TabList>
          <TabPanel>
            <div className="CastTabPanel__container">
              <div className="castTabPanel__wrapper">
                <div className="castTabPanel__time">Now</div>
                <img
                  src={weatherIcons[props.fetchedData.hourly.data[0].icon]}
                  alt={props.fetchedData.hourly.data[0].icon}
                  className="castTabPanel__img"
                />
                <div className="castTabPanel__degree">
                  {Math.floor(props.fetchedData.hourly.data[0].temperature)}
                </div>
              </div>
              {props.fetchedData.hourly.data.slice(1, 24).map((hourlyData, i) => (
                <div key={i} className="castTabPanel__wrapper">
                  <div className="castTabPanel__time">
                    {new Date(hourlyData.time * 1000).getHours()}:00
                  </div>
                  <img
                    src={weatherIcons[hourlyData.icon]}
                    alt={hourlyData.icon}
                    className="castTabPanel__img"
                  />
                  <div className="castTabPanel__degree">
                    {Math.floor(hourlyData.temperature)}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="CastTabPanel__container">
              <div className="castTabPanel__wrapper">
                <div className="castTabPanel__time">Today</div>
                <img
                  src={weatherIcons[props.fetchedData.daily.data[0].icon]}
                  alt={props.fetchedData.daily.data[0].icon}
                  className="castTabPanel__img"
                />
                <div className="castTabPanel__degree">
                  {Math.floor(props.fetchedData.daily.data[0].temperatureHigh)}
                </div>
              </div>
              {props.fetchedData.daily.data.slice(1, 8).map((dailyData, i) => (
                <div key={i} className="castTabPanel__wrapper">
                  <div className="castTabPanel__time">
                    {new Date(dailyData.time * 1000).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                      }
                    )}
                  </div>
                  <img
                    src={weatherIcons[dailyData.icon]}
                    alt={dailyData.icon}
                    className="castTabPanel__img"
                  />
                  <div className="castTabPanel__degree">
                    {Math.floor(Math.floor(dailyData.temperatureHigh))}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default CastTabs;
