import './App.css'
// import { BrowserRouter as Route, Switch } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoaderPage from './pages/LoaderPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoaderPage />,
      errorElement: <ErrorPage />,
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>)
}

      export default App
