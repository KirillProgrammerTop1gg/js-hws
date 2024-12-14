import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useSearchParams } from 'react-router-dom';

const Searchbar = styled.div`
    margin: 80px 0 0 20px;
    text-align: left;
`;
const Input = styled.input`
    width: 250px;
    padding-left: 5px;
    height: 25px;
`;
const SearchBut = styled.button`
    height: 30px;
`;
const Movies = styled.ul`
    &>li{
        text-align: left;
    }
`;

export default function MovieSearch() {
    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const searchFilm = async (film) => {
        if (!film) return;
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${film}&language=en-US`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTIwYWQ0MTMwZTM5NTgwNDU5NDhhYWEzOTY5N2M5YyIsIm5iZiI6MTczNDExNjU3OC42MjcsInN1YiI6IjY3NWM4NGUyYjAzOGI2NWVkZGQ4ODM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CJ9OzQQUNqq_-K8qiLdHjzakJjCn8M4ZXWQi9vJCCUE',
                },
            }
        );
        const searchData = await data.json();
        setFilms(searchData.results);
    };
    const handleSearch = () => {
        const inputValue = document.querySelector('.Input').value.trim();
        if (inputValue) {
            setSearchParams({ query: inputValue });
        }
    };
    useEffect(() => {
        if (query) {
            searchFilm(query);
        }
    }, [query]);
    return (
        <>
            <Searchbar>
                <Input className='Input' defaultValue={query} />
                <SearchBut onClick={handleSearch}>Search</SearchBut>
            </Searchbar>
            <Movies>
                {films.map((film) => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`}>{film.title || film.name || 'No title available'}</Link>
                    </li>
                ))}
            </Movies>
        </>
    );
}
