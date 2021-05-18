import { useState } from "react";

const getTime = (date: Date) => {
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const useGetTime = (date: Date): any => {
  const [currTime, setCurrTime] = useState(getTime(date));
  return [currTime, setCurrTime, getTime];
};

export default useGetTime;
