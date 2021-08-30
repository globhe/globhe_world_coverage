import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: "NHaasGroteskDSPro",
    body1: {
      color: "#8F99A0",
      fontSize: 14,
      lineHeight: 21 / 14,
    },
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 19 / 16,
    },
    h6: {
      color: "#101820",
      fontSize: 24,
      lineHeight: 28 / 24,
      fontWeight: 500,
    },
  },
  palette: {
    black: {
      dark: "#181818",
      light: "#565e63",
      semi: "#1a2e3a",
    },
    primary: {
      main: "#4849d3",
      light: "#6e6fee",
      dark: "#3636a8",
    },
    secondary: {
      light: "#47D7AD",
      main: "#00C489",
      dark: "#005944",
    },
    grey: {
      lighter: "#f9f9f9",
      light: "#EAF1EF",
      mid: "#E3EAE8",
      dark: "#BCC9C5",
      darker: "#101820",
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
