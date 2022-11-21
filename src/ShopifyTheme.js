import { createTheme, ThemeProvider } from "@mui/material/styles";

const marvelDefaultColor = "#FF1493";
const marvelDefaultWidth = 240;

const theme = createTheme({
  defaultWidth: {
    width: marvelDefaultWidth,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: marvelDefaultColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: marvelDefaultColor,
        },
      },
    },
    MuiInputLabelRoot: {
      styleOverrides: {
        root: {
          color: marvelDefaultColor,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
  },
});

export const ShopifyTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
