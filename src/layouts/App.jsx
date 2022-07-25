import React from 'react'
import LayoutsNavbar from '@/layouts/Navbar'
import Loading from '@/components/Loading'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet />
      <LayoutsNavbar />
    </>
  )
}

export default App
