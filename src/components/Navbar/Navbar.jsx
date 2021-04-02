import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../../store/AllActions";

import { navbarStyles } from "./Navbar.Styles";

import logo from "../../logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const classes = navbarStyles();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        value !== 0 && setValue(0);
        break;
      case "/athletes":
        value !== 1 && setValue(1);
        break;
      case "/investigation":
        value !== 2 && setValue(2);
        break;
      case "/aboutus":
        value !== 3 && setValue(3);
        break;
      case "/contactus":
        value !== 4 && setValue(4);
        break;
      default:
        break;
    }
    return () => {};
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const logoutHandler = () => {
    dispatch(Actions.authLogout());
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to={"/"} label="Events" />
        <Tab
          className={classes.tab}
          component={Link}
          to={"/athletes"}
          label="Athletes"
        /> <Tab
          className={classes.tab}
          component={Link}
          to={"/investigation"}
          label="Investigation"
        />
      </Tabs>
      <Button
        variant={"contained"}
        color={"secondary"}
        className={classes.button}
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Toolbar className={classes.logo} />
        <List disablePadding>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            component={Link}
            selected={value === 0}
            to={"/"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText>Events</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            selected={value === 1}
            component={Link}
            to={"/athletes"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
          >
            <ListItemText>Athletes</ListItemText>
          </ListItem>
            <ListItem
            className={classes.drawerItem}
            divider
            button
            selected={value === 1}
            component={Link}
            to={"/investigation"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
          >
            <ListItemText>Investigation</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemEstimate}
            divider
            button
            // component={Link}
            // to={"/estimate"}
            onClick={() => {
              setOpenDrawer(false);
              logoutHandler();
            }}
          >
            <ListItemText className={classes.drawerItem}>Logout</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position={"fixed"} className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to={"/"}
              className={classes.buttonContainer}
              onClick={() => setValue(0)}
            >
              <img
                src={logo}
                height={30}
                alt="Company logo"
                className={classes.logo}
              />
            </Button>
            {token === null ? "" : matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.logo}></Toolbar>
    </React.Fragment>
  );
};

export default Navbar;
