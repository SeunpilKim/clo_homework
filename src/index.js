import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux' ;
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from './App';

const store = createStore(rootReducer);
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
