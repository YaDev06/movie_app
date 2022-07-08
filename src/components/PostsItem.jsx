import React from "react";

const PostsItem = (props) => {
  return (
    <>
      <div className="container">
        <div className="card text-center m-3 p-3" style={{ width: "20rem" }}>
          <img src={props.Poster} className="card-img-top" alt="...Poster" />
          <div className="card-body">
            <h5 className="card-title">{props.Title}</h5>
            <p className="card-text">Year: {props.Year}</p>
            <p className="card-text">
              {props.Type === "movie" ? "Movie " : "Series "}
            </p>
            <button className="btn btn-primary">Download Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsItem;
