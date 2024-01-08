import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path="About" element={<About/>}/>


      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}