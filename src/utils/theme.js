import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#03be9f",
    },
  },
  // typography: {
  //     fontFamily: ["Nunito", "sans-serif"],
  // },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
});
