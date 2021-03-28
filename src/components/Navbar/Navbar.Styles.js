import { makeStyles } from "@material-ui/core/styles";

export const navbarStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "6em",
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    padding: "2.9em 0",
    height: "3em",
    borderBottom: "5px",
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    borderRadius: "30px",
    ...theme.typography.estimate,
    textTransform: "none",
    height: "40px",
    width: "10em",
  },
  buttonContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "0",
    marginTop: "4.15em",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.primary.light,
    },
  },
  menuIcon: {
    height: "50px",
    width: "50px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      height: "40px",
      width: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30px",
      width: "30px",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "$:hover": {
      background: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.secondary.main,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));
