import React from "react";
import { light, dark } from "./Theme";
import Main from "./components/Main/Main";
import { ThemeProvider, CircularProgress } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

function App() {
  const [userTheme, setUserTheme] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  const theme = createMuiTheme(userTheme ? dark : light);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1200));
  }

  React.useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Main setUserTheme={setUserTheme} userTheme={userTheme} />
    </ThemeProvider>
  );
}

export default App;
