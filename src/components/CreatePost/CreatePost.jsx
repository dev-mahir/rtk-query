import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/timeline/timelineAPI';
import Modal from '../Modal/Modal';
import './createpost.scss'

const CreatePost = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    auth_name: "",
    auth_photo: "",
    content: "",
    photo: "",
    post_time: Date.now(),
    reactions: {
      love: 0,
      like: 0,
      dislike: 0
    }
  })

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }


  const handleCreatePost = () => {
    dispatch(createPost(input));
    setModal(false);
  }




  return (
    <>
      <div className='create-post'>
        <button onClick={() => setModal(true)}>
          <i className='bx bx-plus-medical' ></i>
          Create new post</button>
      </div>
      {modal && <Modal>
        <div className="post-form">
          <input type="text" name='auth_name' value={input.auth_name} onChange={handleInputChange} placeholder='Auth Name' />

          <input type="text" name='auth_photo' value={input.auth_photo} onChange={handleInputChange} placeholder='auth photo' />

          <input type="text" name='photo' value={input.photo} onChange={handleInputChange} placeholder='post photo' />

          <input type="text" name='content' value={input.content} onChange={handleInputChange} placeholder='content' />

          <button onClick={handleCreatePost} className='btn btn-primary'>Create post</button>
          <button onClick={() => setModal(false)} className='btn btn-danger m-1'>Close</button>


        </div>
      </Modal>}

    </>

  )
}

export default CreatePost