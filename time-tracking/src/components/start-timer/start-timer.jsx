import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import TextField from "@mui/material/TextField";

const StartTimer = () => {
  return (
    <Box>
      <Stack direction="row" gap={10} justifyContent="center">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        <Select defaultValue={4}>
          <MenuItem value="personal">Personal</MenuItem>
          <MenuItem value="meeting">Meeting</MenuItem>
          <MenuItem value="work">Work</MenuItem>
        </Select>
      </Stack>
      <Button>Start</Button>
    </Box>
  );
};

export default StartTimer;
