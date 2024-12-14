import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';

const Section = styled.section`
    margin-top: 80px;
`;
const BackBut = styled.button`
    background-color: transparent;
    border: 0;
    font-weight: bold;
    text-align: left;
    display: block;
    cursor: pointer;
    font-size: 17px;
    &::before{
        content: "←";
        margin-right: 3px;
    }
`;
const Movie = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
const Poster = styled.img`
    width: 200px;
`;
const MovieData = styled.div`
    text-align: left;
    margin-left: 10px;
`;
const MovieTitle = styled.h3`
    font-size: 24px;
    margin: 0;
`;
const Text = styled.p`
    text-align: left;
`;
const Label = styled.p`
    font-weight: bold;
    text-align: left;
`;
const Genres = styled.ul``;
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #000;
`;
const Links = styled.ul`
    text-align: left;
`;

export default ({}) => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const updateMovie = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, { method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTIwYWQ0MTMwZTM5NTgwNDU5NDhhYWEzOTY5N2M5YyIsIm5iZiI6MTczNDExNjU3OC42MjcsInN1YiI6IjY3NWM4NGUyYjAzOGI2NWVkZGQ4ODM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CJ9OzQQUNqq_-K8qiLdHjzakJjCn8M4ZXWQi9vJCCUE' } });
            const movieFetch = await data.json();
            setMovie(movieFetch);
        }
        updateMovie()
    }, []);
    return (<Section>
        <BackBut onClick={() => navigate(-1)}>Go back</BackBut>
        <Movie>
            <Poster alt='poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <MovieData>
                <MovieTitle>{movie.original_title}</MovieTitle>
                <Text>User Score: {movie.vote_average*10}%</Text>
                <Label>Overview</Label>
                <Text>{movie.overview}</Text>
                <Label>Genres</Label>
                <Genres>
                    {movie.genres && movie.genres.map(genre => <li key={Math.round(Math.random()*100)}><Text>{genre.name}</Text></li>)}
                </Genres>
            </MovieData>
        </Movie>
        <Line></Line>
            <Text>Additional information</Text>
            <Links>
                <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/review`}>Reviews</Link></li>
            </Links>
        <Line></Line>
        <Outlet />
    </Section>)
}