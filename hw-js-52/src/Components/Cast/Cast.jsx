import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Casts = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
`;
const Cast = styled.li`
    width: 100px;
`;
const Photo = styled.img`
    height: 150px;
`;
const Actor = styled.p``;
const Character = styled.p``;
const Error = styled.p``;

export default ({}) => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    useEffect(() => {
        const creditsActors = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, { method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTIwYWQ0MTMwZTM5NTgwNDU5NDhhYWEzOTY5N2M5YyIsIm5iZiI6MTczNDExNjU3OC42MjcsInN1YiI6IjY3NWM4NGUyYjAzOGI2NWVkZGQ4ODM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CJ9OzQQUNqq_-K8qiLdHjzakJjCn8M4ZXWQi9vJCCUE' } });
            const creditsFetch = await data.json();
            setActors(creditsFetch.cast);
        }
        creditsActors()
    }, []);
    return (
        <Casts>{actors.length !== 0 ? actors.map(actor => <Cast key={Math.round(Math.random()*100000+999999)}>
            <Photo src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt='' />
            <Actor>{actor.name}</Actor>
            <Character>{actor.character}</Character>
        </Cast>) : <Error>We don't have any actors for this movie</Error>}</Casts>
    )
}