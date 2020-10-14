import React, { MouseEvent, useState, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import WidgetsIcon from "@material-ui/icons/Widgets";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const MobileMenu = () => {
  const classes = useStyles();
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (e: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(e.currentTarget);
  };

  const handleMobileMenuClose = (e: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "Menu-mobile";
  const renderMobileMenu = (
    <Menu
      id={mobileMenuId}
      anchorEl={mobileMoreAnchorEl}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Show widgets" color="inherit">
          <WidgetsIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Add new wallet" color="inherit">
          <AddCircleOutlineIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Change month" color="inherit">
          <CalendarTodayIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Account" color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.sectionMobile}>
      <IconButton
        aria-label="Show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      {renderMobileMenu}
    </div>
  );
};

export default memo(MobileMenu);
