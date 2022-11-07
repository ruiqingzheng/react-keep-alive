import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import KeepAlive, { AliveScope } from './KeepAlive'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import TestRef from './TestRef'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      count:{count}
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </div>
  )
}

function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
      <p>无 KeepAlive</p>
      {show && <Counter />}
      <p>有 KeepAlive</p>
      {show && (
        <KeepAlive id="Test">
          <Counter />
        </KeepAlive>
      )}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AliveScope>
        <App />
      </AliveScope>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'test-ref',
    element: <TestRef/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
