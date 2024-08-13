import './App.css';
import Section from './Components/Section/Section'
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notification';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import React, { Component } from "react";
import styled from 'styled-components';

const StatisticsTitle = styled.h1`
    text-align: left;
    margin-top: 25px;
    font-size: 28px;
`;

class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    doFeedback = (type) => this.setState((prevState) => ({ [type.toLowerCase()]: prevState[type.toLowerCase()] + 1 }));
    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad
    countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100)
    render() {
        return <>
            <div className="App">
                <Section title="Please leave feedback">
                    <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.doFeedback} />
                    <StatisticsTitle>Statistics</StatisticsTitle>
                    {this.countTotalFeedback() != 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification  message="There is no feedback"/>}
                </Section>
            </div>
        </>
    }
}

export default App;
