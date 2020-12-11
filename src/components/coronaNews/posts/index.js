/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => {
        return (
          <li key={post.id} className="list-group-item list-group-item-action">
            {`${post.id}. ${post.date}`}
            <ul key={post.id}>
              {post.activity.map((postActivity) => {
                return (
                  <li key={postActivity.id}>
                    <h6>{postActivity.title}</h6>
                    {postActivity.desc ? (
                      <ul id="desc">
                        <li>{postActivity.desc}</li>
                      </ul>
                    ) : (
                      <ul>
                        <li>Not Found </li>
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
