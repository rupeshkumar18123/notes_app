import React from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import NoteItem from './components/NoteItem'
import NoteList from './components/NoteList'
import { Routes, Route } from "react-router-dom";
import Header from './header_footer/Header'
import Footer from './header_footer/Footer'

function App() {
 

  return (
    <>
      {/* <h1>This is a notes app</h1> */}
      <Header/>
      {/* <Login/> */}
      <Routes>
        <Route path='/notelist' element={<NoteList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      {/* <Register/> */}
      {/* <NoteItem/> */}
      {/* <NoteList/> */}

      <Footer/>
    </>
  )
}

export default App
