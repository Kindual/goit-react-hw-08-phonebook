import { EmailIcon, SunIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Stack, Button } from '@chakra-ui/react';
import Section from 'components/Section/Section';
import React from 'react'
import { useDispatch } from 'react-redux';
import { signup } from 'redux/authOperation';


export default function RegistrationPage() {
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    dispatch(signup(user))
  }

  return (
    <Section>
      <form action="" onSubmit={onSubmit}>
        <Stack spacing={1}>
          <label>Name
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<SunIcon color='gray.300' />} />
              <Input type="text" name="name" placeholder='Name' />
            </InputGroup>
          </label>

          <label>Email
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />} />
              <Input type="email" name="email" placeholder='email' />
            </InputGroup>
          </label>

          <label>Password
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<ViewOffIcon color='gray.300' />} />
              <Input type="password" name="password" placeholder='password' />
            </InputGroup>
          </label>
          <Button colorScheme='gray' variant='solid' type='submit'>Registration</Button>
        </Stack>
      </form>
    </Section>
  )
}
