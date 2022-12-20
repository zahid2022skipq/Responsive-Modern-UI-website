import React from "react";
import "./article.css";
const Article = ({ imageUrl }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="blogs" />
      </div>
    </div>
  );
};

export default Article;
