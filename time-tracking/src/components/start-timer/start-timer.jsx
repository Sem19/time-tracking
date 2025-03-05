import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import useTimer from "./use-timer";
import useLocalStorage from "../../utils/local-storage/use-local-storage";
import { database } from "../../firebase/firebase";
import { onValue, ref } from "firebase/database";

const StartTimer = ({ setEntries }) => {
  const { getCurrentEntry } = useLocalStorage();
  const [task, setTask] = useState(() => getCurrentEntry().task);
  const [label, setLabel] = useState(() => getCurrentEntry().label);

  const { hourTimer, timer, onStartOrStop } = useTimer(
    setEntries,
    task,
    label,
    setTask
  );

  const onChangeTask = (e) => setTask(e.target.value);
  const onChangeLabel = (e) => setLabel(e.target.value);

  useEffect(() => {
    const starCountRef = ref(database, `/entries/BFeSJfYMzCW5cSYUeJ820PEzbe02`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <Box
      margin="32px 0 16px 0 !important"
      padding="24px"
      border="1px solid #dfe1e7"
      borderRadius="8px"
      backgroundColor="#ffffff"
    >
      <Typography component="h2" align="center" fontSize="24px" variant="title">
        {hourTimer}
      </Typography>
      <Stack margin="16px 0px" direction="row" spacing={2}>
        <TextField
          sx={{ width: "70%" }}
          id="outlined-basic"
          variant="outlined"
          placeholder="What are you working on ?"
          value={task}
          onChange={onChangeTask}
        />

        <Select sx={{ width: "30%" }} value={label} onChange={onChangeLabel}>
          <MenuItem value="personal">Personal</MenuItem>
          <MenuItem value="meeting">Meeting</MenuItem>
          <MenuItem value="work">Work</MenuItem>
        </Select>
      </Stack>
      <Button variant="primary" onClick={onStartOrStop} disabled={!task}>
        {timer ? "Stop" : "Start"}
      </Button>
    </Box>
  );
};

export default StartTimer;
