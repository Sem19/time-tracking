import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useContext, useState } from "react";
import { menuSTyle } from "./style";
import AuthContext from "../../context/auth/auth.jsx";

// import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { onLogOut } = useContext(AuthContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const onLogoutMenu = () => {
    handleClose();
    onLogOut();
  };
  return (
    <>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small">
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={menuSTyle}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={onLogoutMenu}>
          <ListItemIcon>{/* <Logout fontSize="small" /> */}</ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
