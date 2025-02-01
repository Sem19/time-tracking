import { Box, Typography } from "@mui/material";
import { convertSeconds } from "../../helpers/helpers";

const TodaysSummary = ({ entries }) => {
  const totalDurationInSeconds = entries.reduce(
    (ac, entry) => ac + entry.duration,
    0
  );

  const totalTime = convertSeconds({
    seconds: totalDurationInSeconds,
    isWithOutSeconds: true,
  });

  return (
    <Box
      padding="24px"
      border="1px solid #dfe1e7"
      borderRadius="8px"
      width="30%"
      backgroundColor="#ffffff"
    >
      <Typography variant="title">Todays Summary:</Typography>
      <Typography variant="h6" sx={{ color: "#1e56e3" }}>
        {totalTime}
      </Typography>
      <Typography sx={{ color: "#6b7984" }}>Total time tracked</Typography>
    </Box>
  );
};

export default TodaysSummary;
