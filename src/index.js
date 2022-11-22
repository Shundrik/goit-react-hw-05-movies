import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
body {
  width:1200px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;

  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
