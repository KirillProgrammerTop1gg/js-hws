import styled from 'styled-components'

const OptionList = styled.ul`
    display:  flex;
    gap: 10px;
    margin-top: 25px;
`;

const OptionBut = styled.li`
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

export default ({ options, onLeaveFeedback }) => <>
    <OptionList>
        {options.map(option => (
            <li key={option}>
                <OptionBut onClick={() => onLeaveFeedback(option)}>{option}</OptionBut>
            </li>
        ))}
    </OptionList>
</>