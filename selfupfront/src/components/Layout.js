import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div className='nav'>
            <Link to="/">FIll FORM</Link>
            <Link to="/display">Display Images</Link>
        </div>
      <div>
        <hr/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
