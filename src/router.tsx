import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { DefaultLayout } from './pages/_layouts/default-layout'
import { Success } from './pages/success'

const router = createBrowserRouter([
  {
    path: '/coffee-delivery',
    element: <DefaultLayout />,
    children: [
      {
        path: '/coffee-delivery',
        element: <Home />,
      },
      {
        path: '/coffee-delivery/checkout',
        element: <Checkout />,
      },
      {
        path: '/coffee-delivery/success',
        element: <Success />,
      },
      {
        path: '',
        element: <Navigate replace to="/coffee-delivery" />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
