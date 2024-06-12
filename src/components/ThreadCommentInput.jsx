import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadCommentInput({ addCommentThread }) {
  const [content, onContentChange] = useInput('');

  return (
    <div>
      <p className='title-add-comment'>Comment</p>
      <textarea value={content} onChange={onContentChange} className='input-content-comment' rows={10} />
      <button type='button' className='btn' onClick={() => addCommentThread({ content })}>
        Send
      </button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  addCommentThread: PropTypes.func.isRequired
};

export default ThreadCommentInput;