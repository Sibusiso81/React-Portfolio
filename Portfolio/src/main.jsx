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

<Route path='/' element={<App/>}>
<Route index element={<Collection/>}/>
<Route path='login' element={<Login />}/>
<Route path='dashboard' element={<Dashboard />}/>
</Route>




/*     <>
    <Route path='/' element={<Collection />}>
      
      
    
      </Route>
      
   {/* <Route path='/' element={<App/>}>
      <Route path='' elemement={/>
      <Route path="/login" element={<Login/>}>
      <Route path='dashboard' element={<Dashboard/>}></Route>
      </Route>
   </Route> 
    </> */
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <RouterProvider router={router}/>
</React.StrictMode>,
)
