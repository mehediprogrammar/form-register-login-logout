import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'
import myRouter from './Route/Routes'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={myRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
