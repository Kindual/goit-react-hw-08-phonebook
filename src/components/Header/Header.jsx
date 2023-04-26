import { Box, Breadcrumb, BreadcrumbItem, Button } from '@chakra-ui/react';
import Section from 'components/Section/Section';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logOut } from 'redux/authOperation';

export default function Header() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const userName = useSelector(state => state.auth.user.name)
    const dispatch = useDispatch();

    return (
        <header>
            <Section>
                <Box display='flex' alignItems='center' justifyContent='space-between' w='100%'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <NavLink to='/'>Home</NavLink>
                        </BreadcrumbItem>

                        {!isLoggedIn
                            ?
                            <BreadcrumbItem>
                                <NavLink to='/login'>Login</NavLink>
                            </BreadcrumbItem>
                            : <BreadcrumbItem>
                                <NavLink to='/contacts'>Contacts</NavLink>
                            </BreadcrumbItem>
                        }
                        {!isLoggedIn &&
                            <BreadcrumbItem>
                                <NavLink to='/signup'>Registration</NavLink>
                            </BreadcrumbItem>}

                    </Breadcrumb>
                    {isLoggedIn &&
                        <Box display='flex' gap={4} alignItems='center'>
                            <p>{userName}</p>
                            <Button colorScheme='red' variant='ghost' type='button' onClick={() => dispatch(logOut())}>Logout</Button>
                        </Box>
                    }
                </Box>
            </Section>
        </header>
    )
}
