import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index';
import { AppProvider } from './providers';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
