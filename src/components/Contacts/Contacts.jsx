import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contactSlice';
import { deleteContact, fetchContacts } from 'redux/contactsOperations';
import { List, ListItem, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
// import Button from 'components/Button/Button';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const filtering = useSelector(selectFilter);
    const dispatch = useDispatch()

    const filtered = React.useMemo(
        () => contacts.filter(contact => contact.name.toLowerCase().includes(filtering.trim().toLowerCase())),
        [contacts, filtering]
    );

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (

        <List spacing={3} w='33%' mt={3}>

            {filtered.length > 0 && filtered.map(contact =>

                <ListItem key={contact.id} display='flex' alignItems='center' justifyContent='space-between'>
                    <p> {contact.name}: {contact.number}</p>
                    <Button colorScheme='gray'
                        variant='ghost'
                        type='button'
                        onClick={() => dispatch(deleteContact(contact.id))}

                    ><DeleteIcon /></Button>

                </ListItem>
            )}
        </List>

    )
}
