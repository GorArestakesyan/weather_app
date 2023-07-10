import React from "react";

const ForeCast = ({ days, selectedDay, setSelectedDay }) => {
  const handleSelect = (day) =>
    setSelectedDay(day?.date_epoch === selectedDay?.date_epoch ? null : day);
  return (
    <div className="foreCast_container">

      {days?.map((day) => {
        return (
          <div className="each_day" key={day.date}>
            <button className="each_day_btn" onClick={() => handleSelect(day)}>
              <h3
                className={
                  day?.date_epoch === selectedDay?.date_epoch
                    ? "today"
                    : "tommorow"
                }
              >
                {new Date(day.date).toDateString().substr(0, 3)}
              </h3>
            </button>
            <img
              src={day?.day?.condition?.icon}
              className="each_day_icon"
              alt="weather icon"
            />
            <h4 className="each_temp">
              {Math.ceil(day?.day?.mintemp_c)}°-{Math.ceil(day?.day?.maxtemp_c)}
              °
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default ForeCast;
