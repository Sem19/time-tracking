import { Stack } from "@mui/material";
import StartTimer from "../../components/start-timer/start-timer.jsx";
import RecentEntries from "../../components/recent-entries/recent-entries.jsx";
import TodaysSummary from "../../components/todays-summary/today-summary.jsx";
import { useState } from "react";

const localStorageEntries = localStorage.getItem("entries");

const getLocalStorageEntries = () => {
  if (!localStorageEntries) return [];
  const localEntries = JSON.parse(localStorageEntries);
  if (Array.isArray(localEntries)) return localEntries;
  else return [];
};

const TimerPage = () => {
  const [entries, setEntries] = useState(() => getLocalStorageEntries());

  return (
    <Stack spacing={1}>
      <StartTimer setEntries={setEntries} />
      <Stack direction={"row"} spacing={1}>
        <RecentEntries entries={entries} />
        <TodaysSummary entries={entries} />
      </Stack>
    </Stack>
  );
};
export default TimerPage;
