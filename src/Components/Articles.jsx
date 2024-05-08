import { useState, useEffect } from "react";
import axios from "axios";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        axios.get("https://robbies-articles-website.onrender.com/api/articles")
        .then((response) => {
            setArticles(response.data.articles)
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
