import { ThemeProvider } from "@mui/material/styles";
import appTheme from "../components/common/Styles/Theme.styles";
import "../components/common/Styles/grid.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
