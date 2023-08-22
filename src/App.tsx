import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { uiActions } from "./app/slices/uiSlice";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.ui.theme);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const handleThemeToggle = () => {
    dispatch(uiActions.toggleTheme());
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sistema</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
    </ThemeProvider>
  );
}

export default App;
