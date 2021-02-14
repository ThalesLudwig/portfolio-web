import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./config/store";
import ConnectedIntlProvider from "./components/IntlProvider/ConnectedIntlProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="Loading" persistor={persistor}>
        <ConnectedIntlProvider>
          <App />
        </ConnectedIntlProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
