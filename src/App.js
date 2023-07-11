import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
