import { Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { convertSeconds } from "../../helpers/helpers";

const RecentEntriesItem = ({ task, label, startTime, endTime, duration }) => {
  const [startTimeD, endTimeD] = [
    dayjs(startTime).format("HH:mm"),
    dayjs(endTime).format("HH:mm"),
  ];

  const totalTime = convertSeconds({
    isWithOutSeconds: true,
    seconds: duration,
  });

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      backgroundColor={"#dfe1e7"}
      borderRadius={"8px"}
      my={2}
      p={1}
      alignItems={"center"}
      marginLeft="16px"
    >
      <Stack spacing={2}>
        <Typography variant="title">{task}</Typography>
        <Typography sx={{ color: "#717580" }}>
          {`${startTimeD} - ${endTimeD}`}
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Typography backgroundColor={"#edeff6"} px={1} borderRadius={4}>
          {label}
        </Typography>
        <Typography>{totalTime}</Typography>
      </Stack>
    </Stack>
  );
};

export default RecentEntriesItem;
