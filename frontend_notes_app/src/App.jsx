import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import NoteList from './components/NoteList'
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from './header_footer/Header'
import Footer from './header_footer/Footer'

import Body_between from './header_footer/Body_between'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      navigate("/");
    };
  }, [navigate]);
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


