import dayjs from "dayjs";
import { child, get, ref } from "firebase/database";
import { database } from "../../firebase/firebase";

const useLocalStorage = () => {
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

  return { getCurrentEntry };
};

export default useLocalStorage;
