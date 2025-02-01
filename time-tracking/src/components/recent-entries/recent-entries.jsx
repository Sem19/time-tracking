import { Box, Typography } from "@mui/material";
import RecentEntriesItem from "../recent-entries-item/recent-entries-item.jsx";

const RecentEntries = ({ entries }) => {
  return (
    <Box
      padding="24px"
      border="1px solid #dfe1e7"
      borderRadius="8px"
      width="70%"
      backgroundColor="#ffffff"
    >
      <Typography variant="title">Recent Entries</Typography>
      {entries.map((el) => {
        return <RecentEntriesItem key={el.id} {...el} />;
      })}
    </Box>
  );
};

export default RecentEntries;
