import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Collection from './User/Collection/Collection.jsx';
import Dashboard from './Personal/Dashboard/Dashboard.jsx';
import Login from './Personal/Login/Login.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Collection />}> </Route>
      <Route path='/login' element={<Login />}>
      
      </Route>
      <Route path='/dashboard' element={<Dashboard />}/>
   
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
