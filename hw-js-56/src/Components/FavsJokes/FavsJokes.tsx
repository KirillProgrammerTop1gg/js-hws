import { useEffect } from 'react';
import styled from 'styled-components';
import { JokeSchema } from "../RandomJokes/RandomJokes";
import Joke from '../Joke/Joke';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const Title = styled.h1`
  color: #00ff9f;
  font-family: 'Fira Code', monospace;
  text-align: center;
  margin: 2rem 0;
  text-shadow: 0 0 10px #00ff9f;
`;

const Jokes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  gap: 1rem;
`;


export default () => {
    const jokesList = useSelector((state: RootState) => state.jokes.favJokes);
    return (
        <>
            <Title>Favorite jokes:</Title>
            <Jokes>{jokesList.map((jokeItem: JokeSchema) => <Joke {...jokeItem} key={jokeItem.id} />)}</Jokes>
        </>
    );
}