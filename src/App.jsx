import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from 'react'
import Front from "./Front.jsx";
import Signup from "./Signup.jsx";
import Sign from "./Sign.jsx";
import Home from "./Home.jsx";
import Vplayer from "./Vplayer.jsx";
import Account from "./Account.jsx";
import Tvmovie from "./Tvmovie.jsx";
import Member from "./Member.jsx";
import Profiles from "./Profiles.jsx";
import Changeplan from "./Changeplan.jsx";
import Managepayment from "./Managepayment.jsx";
import Changepassword from "./Changepassword.jsx";
import Billingdetails from "./Billingdetails.jsx";

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Front/>}/>
      <Route path='/signin' element={<Sign/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/vplayer' element={<Vplayer/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/tvmovie' element={<Tvmovie/>}/>
      <Route path='/member' element={<Member/>}/>
      <Route path='/pro' element={<Profiles/>}/>
      <Route path='/changeplan' element={<Changeplan/>}/>
      <Route path='/managepayment' element={<Managepayment/>}/>
      <Route path='/changepassword' element={<Changepassword/>}/>
      <Route path='/billingdetails' element={<Billingdetails/>}/>
     

    </Routes>
    </BrowserRouter>    
  );
}
