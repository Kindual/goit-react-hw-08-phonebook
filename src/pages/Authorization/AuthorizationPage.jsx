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
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}
