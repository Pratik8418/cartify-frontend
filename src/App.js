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
import ForgotPassword from './pages/forgetPassword';
import Resetpassword from './pages/ResetPassword'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPloicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermAndContions from './pages/TermAndConditions'
import SingleProduct from './pages/SingleProduct';

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
           <Route path='/forgot-password' element={<ForgotPassword/>}/>  
           <Route path="reset-password" element={<Resetpassword />} />
           <Route path="privacy-policy" element={<PrivacyPolicy />} />
           <Route path="refund-policy" element={<RefundPloicy />} />
           <Route path="shipping-policy" element={<ShippingPolicy />} />
           <Route path="term-conditions" element={<TermAndContions />} />
           <Route path="single-product" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;