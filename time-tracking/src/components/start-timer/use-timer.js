import { useState } from "react";
import { convertSeconds } from "../../helpers/helpers";
import dayjs from "dayjs";

const getStorageTimer = () => {
  const storageTimer = JSON.parse(localStorage.getItem("timer"));
  const isTimerObject = storageTimer && typeof storageTimer === "object";
  if (isTimerObject) {
    const date1 = dayjs();
    const date2 = dayjs(storageTimer.startTime);
    const differSeconds = date1.diff(date2, "s");
    return { ...storageTimer, duration: differSeconds };
  }
  return { duration: 0 };
};

const useTimer = (setEntries, task, label, setTask) => {
  const [currentEntry, setCurrentEntry] = useState(() => getStorageTimer());
  const hourTimer = convertSeconds({ seconds: currentEntry.duration });

  const onStop = () => {
    const newEntry = {
      id: currentEntry.id,
      startTime: currentEntry.startTime,
      task: currentEntry.task,
      label: currentEntry.label,
      duration: currentEntry.duration,
      endTime: dayjs(),
    };

    setCurrentEntry({ duration: 0 });
    clearInterval(currentEntry.intervalId);
    setEntries((prev) => {
      const arrayEntry = [...prev, newEntry];
      localStorage.setItem("entries", JSON.stringify(arrayEntry));
      return arrayEntry;
    });
  };

  const onStart = () => {
    const intervalId = setInterval(() => {
      setCurrentEntry((prev) => ({
        ...prev,
        duration: prev.duration + 1,
      }));
    }, 1000);
    const newEntry = {
      id: dayjs().unix(),
      startTime: dayjs(),
      task,
      label,
      duration: 0,
      intervalId,
    };

    setCurrentEntry(newEntry);
    localStorage.setItem("timer", JSON.stringify(newEntry));
  };

  const onStartOrStop = () => {
    if (!currentEntry.startTime) onStart();
    else {
      onStop();
      setTask("");
    }
  };

  return {
    hourTimer,
    timer: !!currentEntry.startTime,
    onStartOrStop,
  };
};

export default useTimer;
