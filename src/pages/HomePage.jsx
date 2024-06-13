import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import MainPage from '../components/styled/MainPage';
import HeadingMainPage from '../components/styled/HeadingMainPage';

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
    <MainPage>
      <HeadingMainPage>Forum Tersedia</HeadingMainPage>
      <ThreadList threads={threadList} />
      <Link to='/new' className='btn-add'>
        <BsFillPlusCircleFill size={60} />
      </Link>
    </MainPage>
  );
}

export default HomePage;