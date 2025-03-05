import { useEffect, useState } from "react";
import { convertSeconds } from "../../helpers/helpers";
import dayjs from "dayjs";
import useLocalStorage from "../../utils/local-storage/use-local-storage";

const useTimer = (setEntries, task, label, setTask) => {
  const { getCurrentEntry, onWriteToLocalStorage } = useLocalStorage();
  const [currentEntry, setCurrentEntry] = useState(() => getCurrentEntry());
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
    if (getCurrentEntry().duration) onStartTimer();
  }, []);

  const onStop = () => {
    const newEntry = {
      ...currentEntry,
      endTime: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    };

    setCurrentEntry({ duration: 0 });
    clearInterval(currentEntry.intervalId);
    setEntries((prev) => {
      const arrayEntry = [...prev, newEntry];
      onWriteToLocalStorage("entries", arrayEntry);
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
    onWriteToLocalStorage("timer", newEntry);
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
