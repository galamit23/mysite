import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import About from './screens/About'
import Login from './screens/Login'
import MyRecipes from './screens/MyRecipes';
import ContactUs from './screens/ContactUs';
import Start from './screens/Start';
import Nav from './Nav';

import Meat from './screens/Start-Category/Meat'
import Milk from './screens/Start-Category/Milk'
import Vagen from './screens/Start-Category/Vagen'
import Combination from './screens/Start-Category/Cobination'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/myrecipe' element={<MyRecipes/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/start' element={<Start/>}/>
    <Route path='/meat' element={<Meat/>}/>
        {/* <Route path='/start/meat' element={<Meat/>}>
            <Route path='/start/meat/burgers' element={<BurgersDB/>}/>
            <Route path='/start/meat/steaks' element={<SteaksDB/>}/>
            <Route path='/start/meat/entrecotes' element={<EntrecotesDB/>}/>
            <Route path='/start/meat/picanhas' element={<PicanhasDB/>}/>
        </Route> */}

        <Route  path='/start/milk' element={<Milk/>}/>
        <Route  path='/start/vagen' element={<Vagen/>}/>
        <Route  path='/start/combination' element={<Combination/>}/>
      
  </Routes>
</BrowserRouter>
);
//Leave the recording in sec 59. 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
