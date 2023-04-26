import { EmailIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Button, Stack } from '@chakra-ui/react';
import Section from 'components/Section/Section';
import React from 'react'
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperation';

export default function AuthorizationPage() {
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    dispatch(logIn(user))
  }

  return (
    <Section>
      <form action="" onSubmit={onSubmit}>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<EmailIcon color='gray.300' />} />
            <Input type="email" name="email" placeholder='email' />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<ViewOffIcon color='gray.300' />} />
            <Input type="password" name="password" placeholder='password' />
          </InputGroup>
          <Button colorScheme='gray' variant='solid' type='submit'>Login</Button>
        </Stack>
      </form>

    </Section>
  )
}
