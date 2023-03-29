import { formatDistanceToNow } from 'date-fns';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../features/timeline/timelineAPI';
import { getAllPosts, makeLove } from '../../features/timeline/timelineSlice';
import './maintimeline.scss';


const MainTimeline = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);


  return (
    <>
      
      {

        posts.length> 0 ? 
        
        
        [...posts].reverse().map((post, index) =>
        <div className='timeline-all-posts' key={index}>
          <div className="timeline-box">
            <div className="auth-info">
              <img src={post.auth_photo} alt="" />
              <div className="auth-details">
                <h3>{post.auth_name}</h3>
                  <span>
                    {formatDistanceToNowStrict(post.post_time)} ago
                  </span>
                </div>
                <button className='btn-close ' onClick={() =>dispatch(deletePost(post.id)) }></button>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
              {post.photo &&   <img src={post.photo} alt="" />}
            
              <div className="post-reactions">
                <div className="reaction-item" onClick={() => dispatch(makeLove(post.id))}>
                    <span><i className='bx bxs-heart'></i> {post.reactions.love}</span>
                </div>
                <div className="reaction-item">
                    <span> <i className='bx bxs-dislike' ></i> {post.reactions.dislike}</span>
                </div>
                <div className="reaction-item">
                    <span> <i className='bx bxs-like' ></i> {post.reactions.like}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : "No post found"}

    </>

  )
}

export default MainTimeline