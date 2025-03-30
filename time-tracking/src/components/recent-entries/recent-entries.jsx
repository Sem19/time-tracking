import { Box, Typography } from "@mui/material";
import RecentEntriesItem from "../recent-entries-item/recent-entries-item.jsx";
import dayjs from "dayjs";
import Filters from "../filters/filters.jsx";
import { groupBy } from "../../utils/transform-data/transform-data.js";
import useFilters from "../filters/use-filters.js";

const RecentEntries = ({ entries }) => {
  const privetr = groupBy(entries, "startTime");
  const { rangeFilter, handleChangeFilters } = useFilters(entries);

  return (
    <Box
      padding="24px"
      border="1px solid #dfe1e7"
      borderRadius="8px"
      width="70%"
      backgroundColor="#ffffff"
    >
      <Typography variant="title">Recent Entries</Typography>
      <Filters
        rangeFilter={rangeFilter}
        handleChangeFilters={handleChangeFilters}
      />
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
