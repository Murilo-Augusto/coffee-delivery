import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { DefaultLayout } from './pages/_layouts/default-layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '',
        element: <Navigate replace to="/" />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
