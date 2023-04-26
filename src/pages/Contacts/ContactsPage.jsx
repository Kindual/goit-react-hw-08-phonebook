import ContactForm from 'components/ContactForm/ContactForm'
import Contacts from 'components/Contacts/Contacts'
import Filter from 'components/Filter/Filter'
import Section from 'components/Section/Section'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from 'redux/contactsOperations'

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(fetchContacts())
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>


      <Section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </Section>
    </div>
  )
}
