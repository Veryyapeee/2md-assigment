const getTime = (date: Date) => {
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const useGetTime = (date: Date): any => {
  return [getTime(date), getTime];
};

export default useGetTime;
