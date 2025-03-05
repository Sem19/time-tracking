import { Stack } from "@mui/material";
import StartTimer from "../../components/start-timer/start-timer.jsx";
import RecentEntries from "../../components/recent-entries/recent-entries.jsx";
import TodaysSummary from "../../components/todays-summary/today-summary.jsx";
import { useEffect, useState } from "react";
import { child, get, ref, set } from "firebase/database";
import { database } from "../../firebase/firebase.js";

const TimerPage = () => {
  const [entries, setEntries] = useState([]);

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
