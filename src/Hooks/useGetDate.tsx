import { useState } from "react";

const useGetDate = (currDate: Date) => {
  let d = new Date(currDate),
    month = `${d.getMonth() + 1}`,
    day = `${d.getDate()}`,
    year = d.getFullYear();

  month = month.length < 2 ? `0${month}` : month;
  day = day.length < 2 ? `0${day}` : day;

  const [date, setDate] = useState<any>([year, month, day].join("-"));

  return [date, setDate];
};

export default useGetDate;
