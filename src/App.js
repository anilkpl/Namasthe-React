import React from "react";
import AppLayout from "./components/AppLayout.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </>
  );
};

export default App;
