import React, { ReactElement, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './containers/Dashboard'
import Home from './containers/Home'
import TagMng from './containers/Tag'
import Login from './containers/Auth/LoginPage'
import Registration from './containers/Auth/RegisterPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tag" element={<TagMng />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
