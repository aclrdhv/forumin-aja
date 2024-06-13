import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/thread/action';
import MainPage from '../components/styled/MainPage';

function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));

    navigate('/');
  };

  return (
    <MainPage>
      <h1>Buat Forum Baru</h1>
      <ThreadInput addThread={onAddThread} />
    </MainPage>
  );
}

export default AddPage;