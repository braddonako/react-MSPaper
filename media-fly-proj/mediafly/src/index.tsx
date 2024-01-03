import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './state/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import ErrorPage from './components/error/ErrorPage';
import EditLayoutPage from './components/editLayoutPage/EditLayoutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/editLayoutPage",
    element: <EditLayoutPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)