import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
// import ContactForm from './ContactForm/ContactForm'
// import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter';
// import Section from './Section/Section'
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contactsOperations';
import RegistrationPage from 'pages/Registration/RegistrationPage';
import AuthorizationPage from 'pages/Authorization/AuthorizationPage';
import ContactsPage from 'pages/Contacts/ContactsPage';
import HomePage from 'pages/Home/HomePage';

export default function App() {

  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        
        <NavLink to='/login'>Login</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<RegistrationPage />}></Route>
        <Route path='/login' element={<AuthorizationPage />}></Route>
        <Route path='/contacts' element={<ContactsPage />}></Route>
      </Routes>

    </>
  )
}
