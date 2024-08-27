import React, { Component } from 'react';
import styled from 'styled-components';
import StickerList from './Components/StickerList/StickerList';
import Sticker from './Components/Sticker/Sticker';
import Choice from './Components/Choice/Choice';
import stickers from './sticker.json'

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 25px;
`;

export default class App extends Component {
  state = {
    choice: ''
  }
  render(){
    return <>
      <Section>
        <Choice label={this.state.choice}/>
        <StickerList>
          {stickers.map((sticker, idx) => <Sticker img={sticker.img} func={() => this.setState((prevState) => ({ choice: sticker.label }))} key={idx} id={idx} label={sticker.label} />)}
        </StickerList>
      </Section>
    </>
  }
}