import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import AboutUs from './AboutUs.jsx'
import SE03lite from './SE03lite.jsx'
import SE03 from './SE03.jsx'
import SE03Max from './SE03Max.jsx'

import ComparisionAll from './ComparisionAll.jsx'
import ContactUs from './ContactUs.jsx'
import CardComponent from './CardComponent.jsx'
import Rentals from "./Rentals.jsx"
import Home from "./Home.jsx"





const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element = {<Layout/>}>

      {/* <Route path="home" element={<Home/>}/> */}
      <Route path="about" element={<AboutUs/>}/>
      <Route path="SE03lite" element={<SE03lite/>}/>
      <Route path="SE03" element = {<SE03/>}/>
      <Route path="SE03max" element = {<SE03Max/>}/>
      <Route path="compare" element = {<ComparisionAll/>}/>
      <Route path="contact" element = {<ContactUs/>}/>
      <Route path="payment" element = {<CardComponent/>}/>
      <Route path="rentals" element = {<Rentals/>}/>
      <Route path="/home" element = {<Home/>}/>


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
