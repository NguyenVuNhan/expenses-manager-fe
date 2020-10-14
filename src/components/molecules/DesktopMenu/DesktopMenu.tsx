import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import WidgetsIcon from "@material-ui/icons/Widgets";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
}));

const DesktopMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.sectionDesktop}>
      <IconButton aria-label="Show widgets" color="inherit">
        <WidgetsIcon />
      </IconButton>
      <IconButton aria-label="Add new wallet" color="inherit">
        <AddCircleOutlineIcon />
      </IconButton>
      <IconButton aria-label="Change month" color="inherit">
        <CalendarTodayIcon />
      </IconButton>
      <IconButton aria-label="Account" color="inherit">
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
};

export default memo(DesktopMenu);
