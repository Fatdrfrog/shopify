import { createTheme, ThemeProvider } from "@mui/material/styles";

const shopifyDefaultColor = "#00FF7F";
const marvelDefaultWidth = 240;

const theme = createTheme({
  defaultWidth: {
    width: marvelDefaultWidth,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: shopifyDefaultColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: shopifyDefaultColor,
        },
      },
    },
    MuiInputLabelRoot: {
      styleOverrides: {
        root: {
          color: shopifyDefaultColor,
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

export const MarvelThemeContext = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
