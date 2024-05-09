import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlePage } from "../api";

export const ArticlePage = () => {
    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getArticlePage(article_id)
        .then((response) => {
            const article = response.article[0];
            console.log(article);
            setCurrentArticle(article)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err);   
        });
    }, [article_id])

    return isLoading ? (
        <p>Loading...</p> ) : (
            <main>
            <img src={currentArticle.article_img_url} />
            <h3>{currentArticle.title}</h3>
            <p>{currentArticle.author}</p>
            <p>Topic: {currentArticle.topic}</p>
            <p>Comments: {currentArticle.comment_count}</p>
            <p>Votes: {currentArticle.votes}</p>
            </main>
        )
}