import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";

import { theme } from "./utils/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <h1>I am App compoenent</h1>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
