import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className='wrapper'>
      <div className='wrap-input'>
        <label>Title</label>
        <input type='text' value={title} onChange={onTitleChange} />
      </div>
      <div className='wrap-input'>
        <label>Category</label>
        <input type='text' value={category} onChange={onCategoryChange} />
      </div>
      <div className='wrap-input'>
        <label>Content</label>
        <textarea value={body} onChange={onBodyChange} rows={20} />
      </div>
      <button type='button' className='btn' onClick={() => addThread({ title, category, body })}>
        Create
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired
};

export default ThreadInput;