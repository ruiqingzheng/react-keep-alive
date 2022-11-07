import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
// import ErrorPage from './ErrorPage'
// import KeepAliveDemo from './pages/KeepAliveDemo/KeepAliveDemo'
// import RefCacheDemo from './pages/RefCacheDemo/RefCacheDemo'
// import DemoLayout from './DemoLayout'
import CacheRouteLayout from './CacheRouteLayout'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/demo2',
//     element: <CacheRouteLayout />
//   },
//   {
//     path: '/demo',
//     element: <DemoLayout />,
//     children: [
//       {
//         path: 'keepalive-demo',
//         element: <KeepAliveDemo />,
//       },
//       {
//         path: 'cache-demo',
//         element: <RefCacheDemo />,
//       },
//     ],
//   },
  // {
  //   path: '/keepalive-demo',
  //   element: <KeepAliveDemo />,
  // },

  // {
  //   path: '/cache-demo',
  //   element: <RefCacheDemo />,
  // },
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')).render(<CacheRouteLayout/>)
