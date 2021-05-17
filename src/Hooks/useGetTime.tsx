import { useState } from "react";

const useGetTime = (date: Date) => {
  const [time, setTime] = useState<any>(
    date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  return [time, setTime];
};

export default useGetTime;
