import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({component: Component}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  
  return isLoggedIn ? <Navigate to='/'/> : Component; 
}
