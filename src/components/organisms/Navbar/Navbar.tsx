import React, { useState } from "react";
import clsx from "clsx";
import logo from "assets/logo.svg";
import logoFull from "assets/logo-full.svg";
import Sidebar from "components/organisms/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MobileMenu from "components/molecules/MobileMenu";
import DesktopMenu from "components/molecules/DesktopMenu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { drawerWidth } from "constants/style.const";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    height: 40,
    width: "auto",
    display: "inline",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logoFull: {
    height: 40,
    width: "auto",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
    },
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [sideOpen, setSideOpen] = useState<boolean>(false);

  const openSidebar = (): void => {
    setSideOpen(true);
  };

  const closeSidebar = (): void => {
    setSideOpen(false);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, sideOpen && classes.appBarShift)}
        color="inherit"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open side bar"
            onClick={openSidebar}
            className={clsx(
              classes.menuButton,
              sideOpen && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Close side bar"
            onClick={closeSidebar}
            className={clsx(
              classes.menuButton,
              !sideOpen && classes.menuButtonHidden
            )}
          >
            <ChevronLeftIcon />
          </IconButton>
          <img className={classes.logo} src={logo} alt="EM" />
          <img className={classes.logoFull} src={logoFull} alt="EM" />
          <div className="flex-grow-1"></div>
          <MobileMenu />
          <DesktopMenu />
        </Toolbar>
      </AppBar>
      <Sidebar open={sideOpen} />
    </>
  );
};

export default Navbar;
