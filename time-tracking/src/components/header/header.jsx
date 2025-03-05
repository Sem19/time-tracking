import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { useContext, useState } from "react";
import { menuSTyle } from "./style";
import AuthContext from "../../context/auth/auth.jsx";
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
      <Stack
        direction="row"
        justifyContent="space-between"
        borderRadius="8px"
        border="1px solid #dfe1e7"
        margin=""
        background="white"
      >
        <Box></Box>
        <Box>
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
              <ListItemIcon></ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
    </>
  );
};

export default Header;
