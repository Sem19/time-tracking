import { Stack } from "@mui/material";
import StartTimer from "../../components/start-timer/start-timer.jsx";
import RecentEntries from "../../components/recent-entries/recent-entries.jsx";
import TodaysSummary from "../../components/todays-summary/today-summary.jsx";
import { useEffect, useState } from "react";
import useLocalStorage from "../../utils/local-storage/use-local-storage.js";
import { child, get, ref, set } from "firebase/database";
import { database } from "../../firebase/firebase.js";

function writeUserData(entries) {
  set(ref(database, `/entries/BFeSJfYMzCW5cSYUeJ820PEzbe02`), entries);
}

const TimerPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `/entries/BFeSJfYMzCW5cSYUeJ820PEzbe02`)).then((res) => {
      if (res.exists()) {
        setEntries(res.val());
      }
    });
  }, []);

  /*   useEffect(() => {
    writeUserData(entries);
  }, [entries]); */

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
