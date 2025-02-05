import dayjs from "dayjs";

const useLocalStorage = () => {
  const getLocalStorageEntries = () => {
    const localStorageEntries = localStorage.getItem("entries");
    if (!localStorageEntries) return [];
    const localEntries = JSON.parse(localStorageEntries);
    if (Array.isArray(localEntries)) return localEntries;
    else return [];
  };

  const getCurrentEntry = () => {
    const storageTimer = JSON.parse(localStorage.getItem("timer"));
    const isTimerObject = storageTimer && typeof storageTimer === "object";
    if (isTimerObject) {
      const currentDate = dayjs();
      const startTimeEntry = dayjs(storageTimer.startTime);
      const differSeconds = currentDate.diff(startTimeEntry, "s");
      return { ...storageTimer, duration: differSeconds };
    }
    return { task: "", label: "personal", duration: 0 };
  };

  const onWriteToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { getLocalStorageEntries, getCurrentEntry, onWriteToLocalStorage };
};

export default useLocalStorage;
