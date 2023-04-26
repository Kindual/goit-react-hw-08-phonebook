import React, { Suspense, lazy, useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import PublicRoute from './PublicRoute';
import { authCurrent } from 'redux/authOperation';
import Header from './Header/Header';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));
const RegistrationPage = lazy(() => import('pages/Registration/RegistrationPage'));
const AuthorizationPage = lazy(() => import('pages/Authorization/AuthorizationPage'))

export default function App() {
  const isRefreshing = useSelector(state => state.auth.isRefreshing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCurrent())
  }, [dispatch])

  if (!isRefreshing) {
    return
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />

      <Outlet/>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>

        <Route path='/signup' element={<PublicRoute component={<RegistrationPage />} />}></Route>
        <Route path='/login' element={<PublicRoute component={<AuthorizationPage />} />}></Route>

        <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} />} />
      </Routes>


    </Suspense>
  )
}
