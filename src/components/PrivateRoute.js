import React from 'react'
// import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, ...routeProps }) {
  // const isLoggedIn = 
  return (
    <Route {...routeProps}>
      {/* {isLoggedIn ? children : <Redirect to="/signup" />} */}
    </Route>
  )
}
