import React, { ReactElement, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './containers/Dashboard'
import Home from './containers/Home'
import TagMng from './containers/Tag'
import Login from './containers/Auth/LoginPage'
import Registration from './containers/Auth/RegisterPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppProvider from './context'
import ProtectedRoute from './hoc/ProtectedRoute'
function App(): ReactElement {
  console.log('App Render')
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tag"
            element={
              <ProtectedRoute>
                <TagMng />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Registration />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </AppProvider>
  )
}

export default App
