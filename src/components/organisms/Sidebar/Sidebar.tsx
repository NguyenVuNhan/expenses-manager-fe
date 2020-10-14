import React, { memo } from "react";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "constants/style.const";

type Props = {
  open: boolean;
};

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
}));

const Sidebar = ({ open }: Props) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      open={open}
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
    >
      <div className={classes.toolbarIcon}></div>
      <Divider />
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default memo(Sidebar);
