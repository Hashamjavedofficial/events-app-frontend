import { makeStyles } from "@material-ui/core";

export const useLoginStyle = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  formContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  fromContainerChangePassword: {
    marginTop: 0,
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  image: {
    width: "6em",
    height: "6em",
  },
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      marginTop: theme.spacing(2),
    },
  },
  label: {
    "& .MuiFormControlLabel-label": {
      fontSize: "0.8rem",
    },
    "& .MuiTypography-body1": {
      fontSize: "0.73 rem !important",
    },
  },
  submitButton: {
    width: "9em",
    marginTop: "10px",
    borderRadius: "2px",
    textTransform: "none !important",
    fontSize: "0.9rem",
  },
  cancelButton: {
    width: "4em",
    marginTop: "10px",
    borderRadius: "2px",
    textTransform: "none",
    fontSize: "0.9rem",
  },
  textWrapperSignup: {
    fontSize: "0.9rem",
    color: theme.palette.primary.main,
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  cardWrapper: {
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      margin: "0 auto",
    },
  },
  cardWrapper2: {
    width: "98vw",
    height: "100vh",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      height: "auto",
      margin: "0 auto",
      overflow: "visible",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      margin: "0 auto",
    },
  },
  imageContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sideImage: {
    height: "100vh",
    width: "100%",
    objectFit: "cover",
  },
  logo: {
    backgroundColor: "#F6F9FC",
    width: "100%",
    padding: "10px 0",
  },
}));
