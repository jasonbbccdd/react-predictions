import React from 'react'
import LayoutsNavbar from '@/layouts/Navbar'
// import Loading from '@/components/Loading'
import { Outlet } from 'react-router-dom'
import ComposGroupCard from '@/components/GroupCard'

function App() {

  return (
    <>
      <LayoutsNavbar />
      <Outlet />
      {/* <ComposRoundedLogo info={{ type: 'nation', code2: 'ir' }} /> */}
      {/* <ComposRoundedLogo {...{ type: 'nation', code2: 'br', code3: 'BRA' }} /> */}
      <ComposGroupCard {...{ id: 'A', size: 4 }} />
    </>
  )
}

export default App
