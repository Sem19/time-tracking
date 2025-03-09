import { Stack } from "@mui/material";
import StartTimer from "../../components/start-timer/start-timer.jsx";
import RecentEntries from "../../components/recent-entries/recent-entries.jsx";
import TodaysSummary from "../../components/todays-summary/today-summary.jsx";
import { useContext, useEffect, useState } from "react";
import { child, get, ref, set } from "firebase/database";
import { database } from "../../firebase/firebase.js";
import AuthContext from "../../context/auth/auth.jsx";

const TimerPage = () => {
  const { userEmail } = useContext(AuthContext);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `entries/${userEmail.replaceAll(".", "_")}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEntries(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!entries.length) return;
    set(ref(database, "entries/" + userEmail.replaceAll(".", "_")), entries);
  }, [entries]);

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
