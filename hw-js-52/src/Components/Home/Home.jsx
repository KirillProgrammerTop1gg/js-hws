import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h2`
    margin: 80px 0 0 20px;
    text-align: left;
`;
const Movies = styled.ul`
    &>li{
        text-align: left;
    }
`;

export default ({ }) => {
    const [trendings, setTrendigs] = useState([]);
    useEffect(() => {
        const updateTrendings = async () => {
            const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', { method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTIwYWQ0MTMwZTM5NTgwNDU5NDhhYWEzOTY5N2M5YyIsIm5iZiI6MTczNDExNjU3OC42MjcsInN1YiI6IjY3NWM4NGUyYjAzOGI2NWVkZGQ4ODM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CJ9OzQQUNqq_-K8qiLdHjzakJjCn8M4ZXWQi9vJCCUE' } });
            const trending = await data.json();
            setTrendigs(trending.results);
        }
        updateTrendings()
    }, []);
    return (<>
        <Title>Trending today</Title>
        <Movies>
            {trendings.map(trending => <li key={trending.id}>
                <Link to={`/movies/${trending.id}`}>{trending.title || trending.name || 'No title available'}</Link>
            </li>)}
        </Movies>
    </>)
}