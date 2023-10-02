import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import './index.css';
import { router } from './App';
import { GeneralLayouts } from './layouts/GeneralLayouts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={2000}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
