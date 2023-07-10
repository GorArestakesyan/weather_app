import axiosInstance from "../api/axiosInstanse";
import { API_KEY } from "../api/baseURL";
import { setLoader } from "../redux/slices/weatherSlice";
const getCurrentWeather =
   (type, value = "Yerevan", daysCount = 5) =>
   async(dispatch) => {
    dispatch(setLoader(true));
    return axiosInstance
      .get(
        `${type}.json?q=${
          value ? value : ""
        }&days=${"6"}&hour=${12}&key=${API_KEY}`
      )
      .then((res) => res.data)
      .catch((err) => console.log("error :", err))
      .finally(() => {
        dispatch(setLoader(false));
      });
  };
export { getCurrentWeather };
