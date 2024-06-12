import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <div className='wrap-input'>
        <label>Name</label>
        <input type='text' value={name} onChange={onNameChange} placeholder='Name' />
      </div>
      <div className='wrap-input'>
        <label>Email</label>
        <input type='email' value={email} onChange={onEmailChange} placeholder='Email' />
      </div>
      <div className='wrap-input'>
        <label>Password</label>
        <input type='password' value={password} onChange={onPasswordChange} placeholder='Password' />
      </div>
      <button type='button' className='btn' onClick={() => register({ name, email, password })}>
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired
};

export default RegisterInput;