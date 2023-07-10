import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../redux/slices/weatherSlice";
import { getCurrentWeather } from "../services/getCurrentWeater";
import { useDebounce } from "./useDebounce";

const useAPiCall = () => {
  const [inputValue, setInputValue] = useState("Yerevan");
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  // forecast is optional you can set other config (exm. 'current')
  const debouncedOnChange = useDebounce(inputValue, 500);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    dispatch(getCurrentWeather("forecast", debouncedOnChange)).then(
      (result) => {
        setState((prev) => {
          if (!result && !inputValue && prev?.current) {
            dispatch(setModalOpen(false));
            return prev;
          } else if (inputValue && !result) {
            dispatch(setModalOpen(true));
            return prev;
          } else {
            return result;
          }
        });
      }
    );
  }, [debouncedOnChange, dispatch]);
  return [state, onChange, inputValue];
};
export { useAPiCall };
