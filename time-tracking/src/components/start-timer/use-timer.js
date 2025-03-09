import { useContext, useEffect, useState } from "react";
import { convertSeconds } from "../../helpers/helpers";
import dayjs from "dayjs";
import AuthContext from "../../context/auth/auth.jsx";
import { ref, set } from "firebase/database";
import { database } from "../../firebase/firebase.js";
import useStorageFirebase from "../../utils/local-storage/use-storage-firebase.js";

const useTimer = (setEntries, task, label, setTask) => {
  const { userEmail } = useContext(AuthContext);
  const { savedCurrentEntry } = useStorageFirebase();
  const [currentEntry, setCurrentEntry] = useState({
    task: "",
    label: "personal",
    duration: 0,
  });

  const hourTimer = convertSeconds({ seconds: currentEntry.duration });

  const onStartTimer = () => {
    const intervalId = setInterval(() => {
      setCurrentEntry((prev) => ({
        ...prev,
        intervalId,
        duration: prev.duration + 1,
      }));
    }, 1000);
  };

  useEffect(() => {
    if (savedCurrentEntry) {
      setCurrentEntry(savedCurrentEntry);
      onStartTimer();
    }
  }, [savedCurrentEntry]);

  const onStop = () => {
    const newEntry = {
      ...currentEntry,
      endTime: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    };

    setCurrentEntry({ duration: 0 });
    clearInterval(currentEntry.intervalId);
    setEntries((prev) => {
      const arrayEntry = [...prev, newEntry];
      return arrayEntry;
    });
    localStorage.removeItem("timer");
  };

  const onStart = () => {
    const newEntry = {
      task,
      label,
      duration: 0,
      id: dayjs().unix(),
      startTime: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    };
    onStartTimer();
    setCurrentEntry(newEntry);
    set(
      ref(database, "currentEnties/" + userEmail.replaceAll(".", "_")),
      newEntry
    );
  };

  const onStartOrStop = () => {
    if (!currentEntry.startTime) onStart();
    else {
      onStop();
      setTask("");
    }
  };

  return {
    savedTask: savedCurrentEntry?.task,
    savedLabel: savedCurrentEntry?.label,
    hourTimer,
    timer: !!currentEntry.startTime,
    onStartOrStop,
  };
};

export default useTimer;
