import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Country from './screens/Country.jsx'
import Header from './components/Header.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/country/:id",
    element: <Country />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)