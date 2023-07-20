import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { BaseLayout } from "../layout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
]
)

export default router;