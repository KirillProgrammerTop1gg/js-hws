import './App.css';
import Section from './Components/Section/Section'
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notification';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StatisticsTitle = styled.h1`
    text-align: left;
    margin-top: 25px;
    font-size: 28px;
`;

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const doFeedback = (type) => setFeedback((prevFeedback) => ({...prevFeedback, [type.toLowerCase()]: prevFeedback[type.toLowerCase()] + 1}));
    const countTotalFeedback = () => feedback.good + feedback.neutral + feedback.bad;
    const countPositiveFeedbackPercentage = () => Math.round(feedback.good / countTotalFeedback() * 100);
    return <>
        <div className="App">
            <Section title="Please leave feedback">
                <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={doFeedback} />
                <StatisticsTitle>Statistics</StatisticsTitle>
                {countTotalFeedback() != 0 ? <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> : <Notification  message="There is no feedback"/>}
            </Section>
        </div>
    </>
}

export default App;
