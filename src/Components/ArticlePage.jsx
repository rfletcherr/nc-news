import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlePage, patchArticleVote } from "../api";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
    const [currentArticle, setCurrentArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [currentVotes, setCurrentVotes] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);

    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getArticlePage(article_id)
            .then((response) => {
                const article = response.article[0]
                setCurrentArticle(article)
                setCurrentVotes(article.votes)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [article_id]);

    const handleVoteChange = (newVote) => {
        if (!hasVoted) {
            patchArticleVote(article_id, newVote)
                .then(() => {
                    setCurrentVotes((previousVotes) => previousVotes + newVote)
                    setHasVoted(true);
                })
                .catch((err) => {
                    console.log(err)
                });
        }       
    }

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <main>
            <img src={currentArticle.article_img_url} />
            <h3>{currentArticle.title}</h3>
            <p>{currentArticle.author}</p>
            <p>Topic: {currentArticle.topic}</p>
            <p>Votes: {currentVotes}</p>
            <p>Comments: {currentArticle.comment_count}</p>
            <button onClick={() => handleVoteChange(1)}>Upvote</button>
            <button onClick={() => handleVoteChange(-1)}>Downvote</button>
            <Link to={`/articles/${currentArticle.article_id}/comments`}>View Comments</Link>
        </main>
    );
}
