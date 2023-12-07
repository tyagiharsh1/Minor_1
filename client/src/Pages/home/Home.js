import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Search from '../Search/search'

function Home() {
  return (
    <div className="Home">
        <Navbar/>
        <Search/>
    </div>
  )
}

export default Home

