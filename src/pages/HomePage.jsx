import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import ThreadsList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const { threads = [], users = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id
  }));

  return (
    <div className='main-page'>
      <h1>Forum Tersedia</h1>
      <ThreadsList threads={threadList} />
      <Link to='/new' className='btn-add'>
        <BsFillPlusCircleFill size={60} />
      </Link>
    </div>
  );
}

export default HomePage;