import React, {Component} from "react";
import styled from "styled-components";

const Section = styled.section`
    width: 540px;
    margin: 15px auto 0;
    padding: 15px;
    border-radius: 15px;
    background-color: #a881db;
`;
const Input = styled.input`
    display: block;
    margin-bottom: 15px;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    font-size: 18px;
    padding: 5px;
`;
const Result = styled.p`
    font-size: 32px;
`;

export default class LifeCycle extends Component{
    state = {
        value1: 0,
        value2: 0,
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(isNaN(nextState.value1)) && !(isNaN(nextState.value2)) ?  (this.state.value1 !== nextState.value1 || this.state.value2 !== nextState.value2 ? (this.state.value1+this.state.value2 !== nextState.value1+nextState.value2  ? true : false) : false) : false;
    }
    render(){
        console.log('Render!')
        return <>
            <Section>
                <Input type="text" placeholder="Value 1" onChange={(e) => this.setState({value1: parseFloat(e.target.value)})} />
                <Input type="text" placeholder="Value 2" onChange={(e) => this.setState({value2: parseFloat(e.target.value)})} />
                <Result>Value 1 + Value 2 = {this.state.value1+this.state.value2}</Result>
            </Section>
        </>
    }
}