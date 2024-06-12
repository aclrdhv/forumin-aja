import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { name } = authUser;

  return (
    <nav>
      <h2>
        <Link to='/'>ForuminAJA</Link>
      </h2>
      <div>
        <p>Halo, {name}</p>
        <button type='button' onClick={signOut}>
          Sign out
        </button>
      </div>
    </nav>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired
};

export default Navigation;