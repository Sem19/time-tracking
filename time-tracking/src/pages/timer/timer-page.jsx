import { Stack } from "@mui/material";
import StartTimer from "../../components/start-timer/start-timer.jsx";
import RecentEntries from "../../components/recent-entries/recent-entries.jsx";
import TodaysSummary from "../../components/todays-summary/today-summary.jsx";
import { useState } from "react";
import useLocalStorage from "../../utils/local-storage/use-local-storage.js";
import Header from "../../components/header/header.jsx";

const TimerPage = () => {
  const { getLocalStorageEntries } = useLocalStorage();
  const [entries, setEntries] = useState(() => getLocalStorageEntries());

  return (
    <Stack spacing={1}>
      <Header />
      <StartTimer setEntries={setEntries} />
      <Stack direction={"row"} spacing={1}>
        <RecentEntries entries={entries} />
        <TodaysSummary entries={entries} />
      </Stack>
    </Stack>
  );
};
export default TimerPage;
