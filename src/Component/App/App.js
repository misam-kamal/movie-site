import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Port from '../Portfalio/Port'
import About from '../About/About'
import Footer from '../Footer/Footer'
import { Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
     <>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Header/>}></Route>
      <Route path='header' element={<Header/>}></Route>
      <Route path='port' element={<Port/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='*' element={<h1>404</h1>}></Route>

     </Routes>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Footer/>
     </>
    )
  }
}
