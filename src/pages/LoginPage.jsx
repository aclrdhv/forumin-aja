import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import AuthPage from '../components/styled/AuthPage';

function LoginPage() {
  const dispatch = useDispatch();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <AuthPage>
      <h2 className='title-auth'>Login to ForuminAJA</h2>
      <div className='content-auth'>
        <LoginInput login={onLogin} />
        <p>
          Dont have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </AuthPage>
  );
}

export default LoginPage;