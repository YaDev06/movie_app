/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [title, setTitle] = useState("Harry Potter");
  const [type, setType] = useState("all");
  const [count, setCount] = useState(1);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const clickDown = (e) => {
    if (e.key === "Enter") {
      props.searchTitle(title, type, count);
    }
  };
  const Handler = (e) => {
    props.searchTitle(title, e.target.value, count);
  };

  const Next = (c) => {
    if (props.pages < count) {
      setCount(1);
      props.searchTitle(title, type, c);
    } else {
      setCount(count + 1);
      props.searchTitle(title, type, c);
    }
  };
  
  const Prev = (c) => {
    if (count <= 1) {
      setCount(props.pages);
      props.searchTitle(title, type, c);
    } else {
      setCount(count - 1);
      props.searchTitle(title, type, c);
    }
  };
  return (
    <>
      <div className="text-center navbar container border-bottom mb-5">
        <h3 className="text-light">
          <FontAwesomeIcon icon={faFilm} />
          <span> Movie Search</span>
        </h3>
        <nav>
          <div className="buttons">
            <button
              value="all"
              onClick={Handler}
              className="btn btn-outline-dark"
            >
              All
            </button>
            <button
              value="movie"
              onClick={Handler}
              className="btn btn-outline-danger mx-3"
            >
              Movie
            </button>
            <button
              value="series"
              onClick={Handler}
              className="btn btn-outline-success"
            >
              Series
            </button>
          </div>
        </nav>
      </div>
      <div className="my-3 container ">
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #ccc",
            padding: "10px",
            width: "100%",
            fontSize: "1.2rem",
            backgroundColor: "transparent",
            outline: "none",
            color: "#fff",
          }}
          placeholder="Search for a movie"
          type="search"
          aria-label="Search"
          value={title}
          onChange={changeTitle}
          onKeyDown={clickDown}
        />
      </div>
      <div className="paginate my-2">
        <button className="btn btn-info mx-1" onClick={() => Prev(count - 1)}>
          Prev
        </button>
        <button className="btn btn-info mx-1" onClick={() => Next(count + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default Navbar;
