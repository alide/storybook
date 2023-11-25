import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333",
    },
    secondary: green,
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 4,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export default theme;
