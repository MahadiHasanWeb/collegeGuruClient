import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import AuthProvider from './Components/AuthenticationPart/AuthProvider';
import { router } from './Components/Route/Main';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <div className="my-container">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
  </React.StrictMode>
)
