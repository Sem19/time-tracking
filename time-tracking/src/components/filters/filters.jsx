import { useState } from "react";
import Popover from "@mui/material/Popover";
import { DatePicker } from "antd";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const popupItemsCalendar = {
  zIndex: 1000,
  "& .MuiPopover-paper": {
    padding: "16px",
    borderRadius: "8px",
    width: "280px",
    height: "340px",
  },
};

const Filters = ({ rangeFilter, handleChangeFilters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <button onClick={handleOpen}>asdasd </button>

      <Popover
        sx={popupItemsCalendar}
        onClose={handleClose}
        anchorEl={anchorEl}
        open={isOpen}
      >
        <Typography variant="title">Filters</Typography>
        <RangePicker
          allowEmpty={[true, true]}
          className="custom_range_picker"
          value={rangeFilter}
          onChange={(value) =>
            handleChangeFilters(
              value
                ? [
                    value[0] ? dayjs(value[0]).startOf("day") : null,
                    value[1] ? dayjs(value[1]).endOf("day") : null,
                  ]
                : null
            )
          }
        />
      </Popover>
    </>
  );
};
export default Filters;
