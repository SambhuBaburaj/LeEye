import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function LoggedOutUser() {
    const user=localStorage.getItem('Userdata')

  return (
    user?<Outlet/> :<Navigate to='/'/>
  )
}

export default LoggedOutUser