import styled from 'styled-components';
import { useContext } from 'react';
import { FeedbackContext } from '../Feedback/Feedback';

const OptionList = styled.ul`
    display:  flex;
    gap: 10px;
    margin-top: 25px;
`;

const OptionBut = styled.button`
    height: 40px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        background-color: #f0f0f0;
    }
`;

export default ({ options }) => {
const { doFeedback, feedbackList } = useContext(FeedbackContext);
return <>
    <OptionList>
        {options.map(option => (
            <li key={option}>
                <OptionBut onClick={() => (feedbackList.current.focus(), doFeedback(option))}>{option}</OptionBut>
            </li>
        ))}
    </OptionList>
</>}