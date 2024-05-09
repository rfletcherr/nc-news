import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlePage } from "../api";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getArticlePage(article_id)
        .then((response) => {
            const article = response.article[0];
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
            <p>Votes: {currentArticle.votes}</p>
            <p>Comments: {currentArticle.comment_count}</p>
            <Link to={`/articles/${currentArticle.article_id}/comments`}>View Comments</Link>
            </main>
        )
}