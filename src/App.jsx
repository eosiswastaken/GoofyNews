import './App.css'
// import { BrowserRouter as Route, Switch } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoaderPage from './pages/LoaderPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoaderPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Home",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>)
}

      export default App
