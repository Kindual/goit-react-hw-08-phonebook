import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactSlice';
import { addContact } from 'redux/contactsOperations';
import { Input, InputGroup, InputLeftElement, Stack, Button } from '@chakra-ui/react';
import { ChatIcon, PhoneIcon } from '@chakra-ui/icons';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const onSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: name.trim(),
            number: number.trim(),
        }

        if (contacts.findIndex(cont => cont.name.trim().toLowerCase() === contact.name.trim().toLowerCase()) >= 0) {
            return alert(`${name} is already in contacts`)
        }
        dispatch(addContact(contact))

        setName('')
        setNumber('')
    }

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <Stack spacing={4}>
                    <label>Name
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<ChatIcon color='gray.300' />}
                            />
                            <Input variant='filled'
                                placeholder='enter name contact'
                                type="text"
                                name="name"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </InputGroup>
                    </label>
                    <label>Number
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<PhoneIcon color='gray.300' />}
                            />
                            <Input variant='filled'
                                placeholder='enter phone number'
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required />
                        </InputGroup>
                    </label>
                    <Button colorScheme='gray' variant='solid' type='submit'> Add contact</Button>

                </Stack>
            </form>
        </div >
    )
}
