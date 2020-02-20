import React from "react";
import "./ArticleImage.module.css";

const ArticleImage = props => {
  return <img src={props.url} alt={props.title}></img>;
};

export default ArticleImage;
