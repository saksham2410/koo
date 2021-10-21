import React from "react";
import './styles.css'

const Card = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <div className="cardStyles"
        >
          <div>{post.title}</div>
          <div className='body-styles'>{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
