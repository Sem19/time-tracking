import dayjs from "dayjs";
import { useState } from "react";
// 1.el.start_date>=filter_start_date
// 2.el.end_date<=filter_end_date
// 3.el.start_date>=filter_start_date && el.end_date<=filter_end_date
// 4.all

const useFilters = (entries) => {
  const [rangeFilter, setRangeFilter] = useState(null);
  const handleChangeFilters = (value) => setRangeFilter(value);

  console.log(
    rangeFilter,
    entries.filter((entry) => {
      if (!rangeFilter) return true;
      if (rangeFilter[0] && !rangeFilter[1]) {
        return (
          dayjs(entry.startTime).valueOf() >= dayjs(rangeFilter[0]).valueOf()
        );
      }
      if (rangeFilter[1] && !rangeFilter[0]) {
        return (
          dayjs(entry.endTime).valueOf() <= dayjs(rangeFilter[1]).valueOf()
        );
      }
      if (rangeFilter[0] && rangeFilter[1]) {
        return (
          dayjs(entry.startTime).valueOf() >= dayjs(rangeFilter[0]).valueOf() &&
          dayjs(entry.endTime).valueOf() <= dayjs(rangeFilter[1]).valueOf()
        );
      }
    })
  );

  return { rangeFilter, handleChangeFilters };
};
export default useFilters;
