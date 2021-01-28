import React from "react";
import { light, dark } from "./Theme";
import Main from "./components/Main/Main";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

function App() {
  const [userTheme, setUserTheme] = React.useState(true);

  const theme = createMuiTheme(userTheme ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <Main setUserTheme={setUserTheme} userTheme={userTheme} />
    </ThemeProvider>
  );
}

export default App;
