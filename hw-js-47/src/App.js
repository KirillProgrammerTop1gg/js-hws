import './App.css';
import React, { Component } from 'react';
import GifList from './Components/GifList/GifList';
import GifSearch from './Components/GifSearch/GifSearch';
import LoadMore from './Components/LoadMore/LoadMore';
import Notification from './Components/Notification/Notification';

export default class App extends Component {
  state = {
    giflist: [],
    searchQuery: '',
    offset: 0,
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.offset/9 !== 0 && this.state.giflist.length !== prevState.giflist.length) window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
  }
  render() {
    return <>
      <GifSearch changeSearch={(search) => this.setState({ searchQuery: search, giflist: [], offset: 0 }, () => fetch(`https://api.giphy.com/v1/gifs/search?api_key=LHg3QEM2V5rL2gQvopLuI9JKxQWoAG7d&q=${this.state.searchQuery}&limit=9&offset=${this.state.offset}`).then((response) => response.json()).then((gifs) => this.setState((prevState) => ({ giflist: gifs.data, offset: prevState.offset + 9 }))))} />
      {this.state.giflist.length > 0 ? <GifList gifs={this.state.giflist} /> : <Notification />}
      {this.state.giflist.length > 0 && <LoadMore loadFunc={() => fetch(`https://api.giphy.com/v1/gifs/search?api_key=LHg3QEM2V5rL2gQvopLuI9JKxQWoAG7d&q=${this.state.searchQuery}&limit=9&offset=${this.state.offset}`).then((response) => response.json()).then((gifs) => this.setState((prevState) => ({ giflist: [...prevState.giflist, ...gifs.data], offset: prevState.offset + 9 })))} />}
    </>
  }
}
