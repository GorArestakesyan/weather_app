const SelectedDay = ({ selectedDay, isCelsius }) => {
  return (
    <div className="selected_day">
      <h2 className="selected_date">
        {new Date(selectedDay?.date).toDateString().substr(0, 3)}
      </h2>
      <h2 className="selected_date">-</h2>
      <h2 className="current_temp">
        {Math.ceil(
          isCelsius ? selectedDay?.day?.mintemp_c : selectedDay?.day?.mintemp_f
        )}°-
        {Math.ceil(
          isCelsius ? selectedDay?.day?.maxtemp_c : selectedDay?.day?.maxtemp_f
        )}
        °
      </h2>
    </div>
  );
};
export default SelectedDay;
