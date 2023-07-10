import './App.css';
import { useContext } from 'react';
import { AuthContext } from './contexts/UserContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/Router/Router';

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
