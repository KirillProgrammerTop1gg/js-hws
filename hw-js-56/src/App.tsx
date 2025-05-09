import React from 'react';
import "./styles.css";
import RandomJokes from './Components/RandomJokes/RandomJokes';
import FavsJokes from './Components/FavsJokes/FavsJokes';

export default function App() {
    return (
        <div className="App">
            <RandomJokes/>
            <FavsJokes/>
        </div>
    );
}
