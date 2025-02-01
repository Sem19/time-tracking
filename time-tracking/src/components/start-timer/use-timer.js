import { useState } from "react";
import { convertSeconds } from "../../helpers/helpers";
import dayjs from "dayjs";

const useTimer = (setEntries, task, label, setTask) => {
  const [currentEntry, setCurrentEntry] = useState({ duration: 0 });
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
    setEntries((prev) => [...prev, newEntry]);
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
