import './App.css';
import React, { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Loader from './Components/Loader/Loader';
import Modal from './Components/Modal/Modal';

export default class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    isModal: false,
    largeImageURL: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) this.fetchImages();
  }

  fetchImages(){
    if(this.state.search.trim() !== ''){
      this.setState({ isLoading: true })
      fetch(`https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=44851747-335961d91f154475be80ef32b&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => this.setState(prevState => ({ images: prevState.page === 1 ? data.hits : [...prevState.images, ...data.hits], isLoading: false }))).catch(error => console.error('Error fetching images:', error)) 
    }
    else{
      this.setState({ images: [], isLoading: false });
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar func={(inpVal) => this.setState({ search: inpVal, page: 1 })} />
        {this.state.isLoading ? <Loader /> : <>
          <ImageGallery images={this.state.images} openModal={(largeImage) => this.setState({ largeImageURL: largeImage, isModal: true })} />
          {this.state.images.length !== 0 && <Button loadMore={() => this.setState(prevState => ({ page: prevState.page + 1 }))} />}
        </>}
        {this.state.isModal && <Modal img={this.state.largeImageURL} closeFunc={() => this.setState({ isModal: false })} />}
      </div>
    );
  }
}
