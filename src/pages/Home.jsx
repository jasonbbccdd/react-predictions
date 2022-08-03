import React from 'react'
import { Link } from 'react-router-dom'

function PagesHome() {
  return (
    <div id="pages-home" className="container">
      <header className="text-center border-bottom">
        <h1>Home Page <i className="fa-solid fa-circle-user" /></h1>
        <div><Link to="/another">Another Page</Link></div>
      </header>
    </div>
  )
}

export default PagesHome

// function PagesHomeRouter() {
//   const { data } = useUserProfile()

//   if (data.preference.home1) return <Navigate to="/home1" />
//   if (data.preference.home2) return <Navigate to="/home2" />

//   return null
// }
