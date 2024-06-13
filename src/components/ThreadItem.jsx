import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import Category from './styled/Category';
import CardThread from './styled/CardThread';

function ThreadItem({ id, title, body, category, createdAt, totalComments, user }) {
  return (
    <Link to={`/threads/${id}`}>
      <CardThread>
        <p className='card-thread-title'>{title}</p>
        <p dangerouslySetInnerHTML={{ __html: body.slice(0, 300) + (body.length > 300 ? '...' : '') }} />
        <p className='child-desc'>
          Made by {user.name} - {postedAt(createdAt)} - {totalComments} comments
        </p>
        <Category>#{category}</Category>
      </CardThread>
    </Link>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired
};

ThreadItem.propTypes = {
  ...threadItemShape
};

export { threadItemShape };

export default ThreadItem;