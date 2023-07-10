import React, { useState } from "react";
import { useSelector } from "react-redux";

import Modal from "../../assets/components/modal/modal";
import { useAPiCall } from "../../hooks/useApiCall";
import Loader from "../loader";
import ForeCast from "./ForeCast";
import SelectedDay from "./SelectedDay";

const Weather = () => {
  const [state, onChange, inputValue] = useAPiCall();
  const [selectedDay, setSelectedDay] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const { loader } = useSelector(({ weather }) => weather);
  const handleChangeUnit = () => setIsCelsius(!isCelsius);

  return (
    <div
      className={"weather_container"}
      style={{ pointerEvents: loader ? "none" : "all" }}
    >
      <Modal />
      {loader ? <Loader /> : null}
      <div className="input_toggle_box">
        <input
          className="weather_input"
          value={inputValue}
          onChange={onChange}
          placeholder="Write city name"
        />
        <button className="toggle_unit" onClick={handleChangeUnit}>
          {isCelsius ? "To F°" : "To C°"}
        </button>
      </div>
      <div className="weather_icon">
        <img
          src={state?.current?.condition.icon}
          className="current_day_icon"
          alt="weather icon"
        ></img>
      </div>
      <div className="current_location_box">
        <h2 className="current_county">{state?.location?.country}</h2>
        <h2 className="current_county">{state?.location?.name}</h2>
      </div>
      {selectedDay ? (
        <SelectedDay selectedDay={selectedDay} isCelsius={isCelsius} />
      ) : (
        <h2 className="current_temp">
          {isCelsius ? state?.current?.temp_c : state?.current?.temp_f}°
        </h2>
      )}

      <ForeCast
        days={state?.forecast?.forecastday}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </div>
  );
};

export default Weather;
