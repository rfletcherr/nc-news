import { useState, useEffect } from "react";
import axios from "axios";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../api";

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return isLoading ? (
        <p>Loading...</p> ) : (
        <main>
            <ul className='articles'>
                {articles.map(article => (
                    <ArticleCard article={article} />
                ))}
            </ul>
        </main>
    );
}
