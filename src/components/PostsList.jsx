import React from "react";
import PostsItem from "./PostsItem";
import Loader from "./Loader/Loader";

const PostsList = (props) => {
  return (
    <>
      {props.posts.length ? (
        props.posts.map((item) => (
          <div key={item.id}>
            <PostsItem {...item} />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PostsList;
