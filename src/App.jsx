/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import url from "./config/config";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    fetch(url + "Harry Potter")
      .then((response) => response.json())
      .then((json) =>
        setPosts(json.Search, setPages(Math.ceil(json.totalResults / 10)))
      );
  }, []);

  const searchTitle = (title, type, count) => {
    if (count < 1) {
      count = pages;
    }
    if (pages < count) {
      count = 1;
    }

    fetch(
      `https://www.omdbapi.com/?apikey=b1b3cfca&s=${title}${
        type !== "all" ? `&type=${type}` : ""
      }&page=${count}`
    )
      .then((response) => response.json())
      .then((json) => setPosts(json.Search, setPages(Math.ceil(json.totalResults / 10))));
  };

  return (
    <>
      <Navbar pages={pages} searchTitle={searchTitle} />
      <Content posts={posts} />
      <Footer />
    </>
  );
};

export default App;
