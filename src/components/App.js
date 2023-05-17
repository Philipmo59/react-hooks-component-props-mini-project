import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";
import Header from "./Header";


function App() {
  return (
    <div>
      <Header name={blogData.name}/>
      <About image={blogData.image}/>
      <Article />
      <ArticleList posts={blogData.posts}/>
  
    </div>
  );
}

export default App;
