import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";

export const ArticleComments = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [articleComments, setArticleComments] = useState([])
    const { article_id } = useParams()
    useEffect(() => {
        setIsLoading(true);
        getComments(article_id)
            .then((comments) => {
                console.log(comments);
                if (comments.length === 0) {
                    setArticleComments([])
                } else {
                    setArticleComments(comments)
                }
                setIsLoading(false)
            })
            .catch((error) => {
                console.dir(error)
                setIsLoading(false)
            })
    }, [article_id]);

    return (
        <div>
            <h1>Comments</h1>
            <div className="commentPage">
                {isLoading ? (
                    <p>Loading comments...</p>
                ) : articleComments.length === 0 ? (
                    <p>No comments available</p>
                ) : (
                    articleComments.map((comment, index) => (
                        <div className="comment" key={index}>
                            <p>{comment.body}</p>
                            <p>Author: {comment.author}</p>
                            <p>Votes: {comment.votes}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
