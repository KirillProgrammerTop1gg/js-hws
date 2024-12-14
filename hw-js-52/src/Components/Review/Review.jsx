import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Reviews = styled.ul`
    text-align: left;
`;
const Review = styled.li``;
const Author = styled.h3``;
const ReviewText = styled.p``;
const Error = styled.p`
    font-weight: bold;
    font-size: 27px;
`;

export default ({}) => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const updateReviews = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`, { method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTIwYWQ0MTMwZTM5NTgwNDU5NDhhYWEzOTY5N2M5YyIsIm5iZiI6MTczNDExNjU3OC42MjcsInN1YiI6IjY3NWM4NGUyYjAzOGI2NWVkZGQ4ODM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CJ9OzQQUNqq_-K8qiLdHjzakJjCn8M4ZXWQi9vJCCUE' } });
            const reviewsFetch = await data.json();
            setReviews(reviewsFetch.results);
        }
        updateReviews()
    }, []);
    return (
        <Reviews>{reviews.length !== 0 ? reviews.map(review => <Review key={Math.round(Math.random()*1000)}>
            <Author>Author {review.author}</Author>
            <ReviewText dangerouslySetInnerHTML={{ __html: review.content }} />
        </Review>) : <Error>We don't have any reviews for this movie</Error>}</Reviews>
    )
}