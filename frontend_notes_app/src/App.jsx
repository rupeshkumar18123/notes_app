import React from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import NoteItem from './components/NoteItem'
import NoteList from './components/NoteList'
import { Routes, Route } from "react-router-dom";
import Header from './header_footer/Header'
import Footer from './header_footer/Footer'

import Body_between from './header_footer/Body_between'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/notelist' element={<NoteList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Body_between />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
