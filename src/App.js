import React from "react";
import Main from "./components/main";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
