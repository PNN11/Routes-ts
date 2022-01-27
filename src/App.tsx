import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
const App: React.FC = () =>  {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
