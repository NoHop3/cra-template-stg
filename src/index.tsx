import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { configureAppStore } from './shared/store/configure-store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={configureAppStore()}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
);
