import { useState, useEffect } from "react";

import axios from "axios";

import "./index.scss";

export function Profile() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  const getWeather = async (lat, long) => {
    const res = await axios.get("api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: "pt",
        units: "metric",
      },
    });
    console.log(res.data);
    setWeather(res.data);
  };

  console.log(weather);

  return (
    <div className="profile-container">
      <h2>Clima hoje </h2>

      <h1>Salões que você já visitou</h1>

      <div className="profile-info">
        <img
          src="https://dominiquemakowski.github.io/authors/gandalf/avatar_hu26b06be530b08e9b91eb9c90bbd4ed3d_163032_270x270_fill_q90_lanczos_center.jpg"
          alt="Avatar"
        />
        <span className="profile-social-media">@youshallnotpass</span>
        <span>Você já:</span>
      </div>

      <div className="profile-services">
        <div className="profile-company-title">
          <h3>Serviços que você mais utilizou:</h3>
        </div>
      </div>
    </div>
  );
}
