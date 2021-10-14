import { useState, useEffect } from "react";
import axios from "axios";

import { user } from "../../utils/user";
import { GoLocation } from "react-icons/go";

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
    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
  };

  if (weather === false) {
    return "carregando...";
  }

  console.log(weather);

  return (
    <div className="profile">
      <h2 className="header-name">
        {user.map((data) => `Olá ${data.name}, aqui está o seu perfil`)}
      </h2>

      <div className="profile-content">
        <div className="profile-weather">
          <div className="header-weather">
            <h2>Hoje</h2>
            <p>14/10/2021</p>
          </div>
          <div className="data-weather">
            <h3>{weather.weather[0].description}</h3>
            <span>{weather.main.temp}ºC</span>
          </div>
          <p className="city-weather">
            <GoLocation />
            {weather.name}
          </p>
        </div>

        <div className="profile-info">
          <div className="profile-info-content">
            <div className="profile-info-header">
              <img
                src="https://dominiquemakowski.github.io/authors/gandalf/avatar_hu26b06be530b08e9b91eb9c90bbd4ed3d_163032_270x270_fill_q90_lanczos_center.jpg"
                alt="Avatar"
              />
              <span className="profile-social-media">@youshallnotpass</span>
            </div>
            <span className="profile-info-transition">Você já:</span>

            <div className="data-profile">
              <div className="data-profile-items">
                <span>00</span>
                <p>Agendamentos</p>
              </div>

              <div className="data-profile-items">
                <span>00</span>
                <p>Locais</p>
              </div>

              <div className="data-profile-items">
                <span>00</span>
                <p>Procedimentos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
