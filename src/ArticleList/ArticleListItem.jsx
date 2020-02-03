import React from 'react';

const ArticleListItem = (props) => {
    return (
        <div>
            <head>
                <title>{props.article.title}</title>
            </head>
            <body>
                <h1>{props.article.title}</h1>
                <p>{props.article.shortText}</p>
                <time datetime={props.article.pubYear}>{props.article.pubDate}</time>
                <button onClick = {() => (alert(props.article.slug))}>show article slug</button> 
            </body>
        </div>
    );
};  

export default ArticleListItem;