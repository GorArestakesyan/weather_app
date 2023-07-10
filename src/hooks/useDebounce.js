import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../redux/slices/weatherSlice";

export const useDebounce = (value, milliSeconds) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();
  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setModalOpen(false));
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds, dispatch]);
  return debouncedValue;
};
