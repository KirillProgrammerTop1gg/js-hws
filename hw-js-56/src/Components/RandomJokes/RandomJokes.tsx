import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import Joke from '../Joke/Joke';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import type { AppDispatch } from '../../redux/store';
import { getJokes } from '../../redux/jokeApi';

const Title = styled.h1`
  color: #bd93f9;
  font-family: 'Fira Code', monospace;
  text-align: center;
  margin: 2rem 0;
  text-shadow: 0 0 10px #bd93f9;
`;

const Jokes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  gap: 1rem;
`;

const RegenerateBut = styled.button`
  display: block;
  margin: 2rem auto;
  background: #ff5555;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-family: 'Fira Code', monospace;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;
  &:hover {
    background: #ff79c6;
  }
`;


export type JokeSchema = {
    id: number;
    type?: string;
    setup: string;
    punchline: string;
}

const RandomJokes = () => {
    const dispatch = useDispatch<AppDispatch>();
    const fetchJokes = async () => {
        await dispatch(getJokes());
    };
    useEffect(() => {
        fetchJokes();
    }, [dispatch]);
    const jokesList = useSelector((state: RootState) => state.jokes.randomJokes);
    return (
        <>
            <Title>Random Jokes</Title>
            <Jokes>{jokesList.map(jokeItem => <Joke {...jokeItem} key={jokeItem.id} />)}</Jokes>
            <RegenerateBut onClick={() => fetchJokes()}>Get 10 NEW jokes!!!</RegenerateBut>
        </>
    );
}

export default RandomJokes;