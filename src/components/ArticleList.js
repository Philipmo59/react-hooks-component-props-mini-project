import React from "react";
import Article from "./Article"


function ArticleList({posts}){
    let articleComponents = posts.map(post =>
        <Article 
            title={post.title}
            date={post.date}
            preview={post.preview}
            key={post.id}
        />
    )
    return(
        <main>
            {articleComponents}
        </main>
    )
}

export default ArticleList