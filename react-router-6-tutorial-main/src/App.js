import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedLayout from './pages/SharedLayout'
import SharedProductLayout from './pages/SharedProductLayout'
import SingleProduct from './pages/SingleProduct'
import { useState } from 'react';

function App() {
  const [user,setuser]=useState(null)
  return(
    <BrowserRouter>
    
      <Routes>
        {/* for the nested route to work we must go to the parent and place the outlet */}
        <Route path='/' element={<SharedLayout/>}> 
          <Route index element={<Home/>}/>{/**content only for the home index */}
          <Route path='about' element={<About/>} />
          <Route path='products' element={<SharedProductLayout/>}>
            <Route index element={<Products/>}/>
            <Route path=':productid' element={<SingleProduct/>}/>
          </Route>

          {/* we can setup url params like anested url or as below used when we want to show a single page product 
          must start with colon you can place either products/: or remove the products
          to get the productid we use the useparams hook*/}
          
          <Route path='login' element={<Login setuser={setuser}/>}/>
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}/>
            </ProtectedRoute>
            }/>
        </Route> 
        <Route path='*' element={<Error/>}/>
      </Routes>
     
    </BrowserRouter>
  )
  
  
}

export default App;
