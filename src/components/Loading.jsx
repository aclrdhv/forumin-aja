import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import LoadingStyle from './styled/LoadingStyle';

function Loading() {
  return (
    <LoadingStyle>
      <LoadingBar />
    </LoadingStyle>
  );
}

export default Loading;