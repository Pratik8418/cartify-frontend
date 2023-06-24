import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import WishList from './pages/WishList';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart'
import Checkout from './pages/Checkout';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/ourstore' element={<OurStore/>}/>
           <Route path='/blogs' element={<Blogs/>}/>
           <Route path='/compare-product' element={<CompareProduct/>}/>
           <Route path='/wishlist' element={<WishList/>}/>
           <Route path='/login' element={<Login/>}/> 
           <Route path='/signup' element={<SignUp/>}/>  
           <Route path='/cart' element={<Cart/>}/>  
           <Route path='/checkout' element={<Checkout/>}/>  
           <Route path='/single-blog' element={<SingleBlog/>}/>  
           <Route path='/forgot-password' element={<SingleBlog/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
