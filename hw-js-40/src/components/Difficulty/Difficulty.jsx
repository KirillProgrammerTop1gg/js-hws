import styled from "styled-components";

const Section = styled.section`
    background-color: #FFF;
    border-radius: 25px;
    padding: 10px 10px 25px;
    width: 250px;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    margin: 0;
`;

const List = styled.ul`
    display: flex;
    gap: 5px;
    width: min-content;
    margin: 10px auto 0;
    padding: 0;
    list-style: none;
`;

const Item = styled.li`
    padding: 10px;
    border-radius: 40px;
    font-size: 12px;
`;

const Difficulty = ({ difficulty }) => <Section>
    <Title>Difficulty</Title>
    <List>
        <Item style={{"backgroundColor": difficulty === 0 ? '#eb3452' : '#f2dbaa', "color": difficulty === 0 ? '#fff' : '#000'}}>Easy</Item>
        <Item style={{"backgroundColor": difficulty === 1 ? '#eb3452' : '#f2dbaa', "color": difficulty === 1 ? '#fff' : '#000'}}>Medium</Item>
        <Item style={{"backgroundColor": difficulty === 3 ? '#eb3452' : '#f2dbaa', "color": difficulty === 3 ? '#fff' : '#000'}}>Hard</Item>
    </List>
</Section>

export default Difficulty;