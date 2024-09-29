import './App.css';
import React, { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Loader from './Components/Loader/Loader';
import Modal from './Components/Modal/Modal';
import Notification from './Components/Notification/Notification';

export default class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    isModal: false,
    modalId: '',
    isButton: true,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== 1 && this.state.images.length !== prevState.images.length) window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) this.fetchImages();
  }

  fetchImages(){
    if(this.state.search.trim() !== ''){
      this.setState({ isLoading: true })
      fetch(`https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=44851747-335961d91f154475be80ef32b&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => this.setState(prevState => ({ images: prevState.page === 1 ? data.hits : [...prevState.images, ...data.hits], isLoading: false, isButton: data.hits.length === 12 }))).catch(error => console.error('Error fetching images:', error));
    }
    else{
      this.setState({ images: [], isLoading: false });
    }
  }

  handleKeyDown = (event) => {
    if(event.key === 'Escape') this.setState({ modalId: 0, isModal: false })
    if(event.key === 'ArrowLeft') this.setState({ modalId: this.state.modalId > 0 ? this.state.modalId - 1 : this.state.images.length - 1 });
    if(event.key === 'ArrowRight') this.setState({ modalId: this.state.modalId < this.state.images.length - 1 ? this.state.modalId + 1 : 0 });
  };

  render() {
    return (
      <div className="App">
        <Searchbar func={(inpVal) => this.setState({ search: inpVal, page: 1 })} />
        {this.state.isLoading ? <Loader /> : <>
          {this.state.images.length !== 0 && <ImageGallery images={this.state.images} openModal={(id) => (this.setState({ modalId: this.state.images.indexOf(this.state.images.find(image => image.id === id)), isModal: true }),window.addEventListener('keydown', this.handleKeyDown))} />}
          {this.state.images.length !== 0 && this.state.isButton && <Button loadMore={() => this.setState(prevState => ({ page: prevState.page + 1 }))} />}
        </>}
        {this.state.images.length === 0 && <Notification />}
        {this.state.isModal && <Modal img={this.state.images[this.state.modalId].largeImageURL} closeFunc={() => (this.setState({ isModal: false }), window.removeEventListener('keydown', this.handleKeyDown))} />}
      </div>
    );
  }
}
