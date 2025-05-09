import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FC } from "react";
import { JokeSchema } from "../RandomJokes/RandomJokes";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import type { AppDispatch } from '../../redux/store';
import { addFav, removeFav } from '../../redux/jokeSlice';

const JokeEl = styled.li`
  background: #1a1a1a;
  color: #f8f8f2;
  border: 1px dashed #ff79c6;
  border-radius: 12px;
  padding: 1rem;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px) rotate(-1deg);
    box-shadow: 0 0 15px #ff79c6;
  }
`;

const Setup = styled.h2`
  font-family: 'Fira Code', monospace;
  color: #8be9fd;
  margin-bottom: 0.5rem;
`;

const Punchline = styled.p`
  font-family: 'Fira Code', monospace;
  color: #f1fa8c;
  margin: 0.5rem 0;
`;

const AddFavBut = styled.button`
  background: ${props => props.disabled ? '#444' : '#50fa7b'};
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  font-family: 'Fira Code', monospace;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-top: 0.5rem;
  &:hover {
    background: #ffb86c;
  }
`;


const Joke: FC<JokeSchema> = ({ id, setup, punchline }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favJokes = useSelector((state: RootState) => state.jokes.favJokes);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const alreadyInFav = favJokes.some(joke => joke.id === id);
    setIsFav(alreadyInFav);
  }, [id]);
  return (
    <JokeEl id={id.toString()}>
      <Setup>{setup}</Setup>
      <Punchline>{punchline}</Punchline>
      <AddFavBut onClick={() => {
        if (isFav) {
          dispatch(removeFav(id));
          setIsFav(false);
        } else {
          dispatch(addFav({ id, setup, punchline }));
          setIsFav(true);
        }
      }}>{isFav ? "Remove from Fav" : "Add to Fav"}</AddFavBut>
    </JokeEl>
  );
};

export default Joke;