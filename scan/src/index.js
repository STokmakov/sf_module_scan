import "@styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ScanApp } from "@/App";
import { Provider } from 'react-redux';
import { store } from '@store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <BrowserRouter>
          <ScanApp />
      </BrowserRouter>
    </Provider>

);
