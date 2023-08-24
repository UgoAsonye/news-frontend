import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleArticlesIndex = () => {
    axios.get(`http://localhost:3000/articles.json?search=${searchTerm}`).then((response) => {
      setArticles(response.data.articles);
    });
  };

  // const HandleShowArticle = (article) => {
  //   console.log("handleShowArticle", article);
  //   setIsArticlesShowVisible(true);
  //   setCurrentArticle(article);
  // };

  // const handleClose = () => {
  //   console.log("handelclose");
  //   setIsArticlesShowVisible(false);
  // };

  useEffect(handleArticlesIndex, []);
  return (
    <div>
      <h1>Welcome to the News!</h1>
      <div>
        Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button onClick={handleArticlesIndex}>Search</button>
      </div>
      <ArticlesIndex articles={articles} />
    </div>
  );
}
