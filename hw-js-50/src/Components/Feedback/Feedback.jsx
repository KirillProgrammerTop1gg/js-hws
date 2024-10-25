import Section from './../Section/Section'
import Statistics from './../Statistics/Statistics';
import Notification from './../Notification/Notification';
import FeedbackOptions from './../FeedbackOptions/FeedbackOptions';
import { useState, useEffect, useRef, createContext } from 'react';
import styled from 'styled-components';

const StatisticsTitle = styled.h1`
    text-align: left;
    margin-top: 25px;
    font-size: 28px;
`;

export const FeedbackContext = createContext();

const Feedback = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const feedbackList = useRef(null);
    const doFeedback = (type) => setFeedback((prevFeedback) => ({...prevFeedback, [type.toLowerCase()]: prevFeedback[type.toLowerCase()] + 1}));
    const countTotalFeedback = () => feedback.good + feedback.neutral + feedback.bad;
    const countPositiveFeedbackPercentage = () => Math.round(feedback.good / countTotalFeedback() * 100);
    return <>
        <FeedbackContext.Provider value={{ doFeedback, feedbackList }}>
        <div className="Feedback">
            <Section title="Please leave feedback">
                <FeedbackOptions options={['Good', 'Neutral', 'Bad']}/>
                <StatisticsTitle>Statistics</StatisticsTitle>
                {countTotalFeedback() != 0 ? <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> : <Notification  message="There is no feedback"/>}
            </Section>
        </div>
        </FeedbackContext.Provider>
    </>
}

export default Feedback;
