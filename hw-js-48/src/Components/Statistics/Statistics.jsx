import styled from 'styled-components';

const StatisticInfoEl = styled.p`
    font-size: 18px;
    margin-top: 15px;
    text-align: left;
`

export default ({ good, neutral, bad, total, positivePercentage }) => <>
    <StatisticInfoEl>Good: {good}</StatisticInfoEl>
    <StatisticInfoEl>Neutral: {neutral}</StatisticInfoEl>
    <StatisticInfoEl>Bad: {bad}</StatisticInfoEl>
    <StatisticInfoEl>Total: {total}</StatisticInfoEl>
    <StatisticInfoEl>Positive feedback: {positivePercentage}%</StatisticInfoEl>
</>