import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './style.css';
import { StrictMode } from "react";
import {DataProvider} from './GloblaState';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
