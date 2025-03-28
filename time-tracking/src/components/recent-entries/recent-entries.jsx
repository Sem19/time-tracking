import { Box, Typography } from "@mui/material";
import RecentEntriesItem from "../recent-entries-item/recent-entries-item.jsx";
import dayjs from "dayjs";

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [dayjs(item[key]).format("YYYY-MM-DD")]: [
        ...(result[dayjs(item[key]).format("YYYY-MM-DD")] || []),
        item,
      ],
    }),
    {}
  );

const RecentEntries = ({ entries }) => {
  const privetr = groupBy(entries, "startTime");

  return (
    <Box
      padding="24px"
      border="1px solid #dfe1e7"
      borderRadius="8px"
      width="70%"
      backgroundColor="#ffffff"
    >
      <Typography variant="title">Recent Entries</Typography>
      {Object.keys(privetr).map((item) => {
        return (
          <div style={{ marginTop: "16px" }} key={item}>
            <Typography variant="title">
              {dayjs(item).format("DD, MMM ddd YYYY")}
            </Typography>

            {privetr[item].map((el) => (
              <RecentEntriesItem key={el.id} {...el} />
            ))}
          </div>
        );
      })}
    </Box>
  );
};

export default RecentEntries;
