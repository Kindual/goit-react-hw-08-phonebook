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
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <button type="submit">Registration</button>
      </form>
    </div>
  )
}
