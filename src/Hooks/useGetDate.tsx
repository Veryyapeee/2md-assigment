const getDate = (currDate: Date) => {
  let d = new Date(currDate),
    month = `${d.getMonth() + 1}`,
    day = `${d.getDate()}`,
    year = d.getFullYear();

  month = month.length < 2 ? `0${month}` : month;
  day = day.length < 2 ? `0${day}` : day;

  return [year, month, day].join("-");
};

const useGetDate = (date: Date): any => {
  return [getDate(date), getDate];
};

export default useGetDate;
