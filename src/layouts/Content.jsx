import React from "react";
import PostsList from "../components/PostsList";
import Error from "./../components/Error/Error";
const Content = (props) => {
  

  if (!props.posts) {
    return <Error />;
  } else {
    return (
      <div className="content">
        <PostsList posts={props.posts} />
      </div>
    );
  }
};

export default Content;
