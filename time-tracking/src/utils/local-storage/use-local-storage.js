import dayjs from "dayjs";
import { child, get, ref } from "firebase/database";
import { database } from "../../firebase/firebase";

const useLocalStorage = () => {
  const getLocalStorageEntries = async () => {
    const dbRef = ref(database);
    const res = await get(
      child(dbRef, `/entries/BFeSJfYMzCW5cSYUeJ820PEzbe02`)
    );
    if (res.exists()) {
      return res.val();
    } else {
      return [];
    }
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
