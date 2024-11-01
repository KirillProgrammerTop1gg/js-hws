import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Loader from './Components/Loader/Loader';
import Modal from './Components/Modal/Modal';
import Notification from './Components/Notification/Notification';
import { useState, useCallback, useEffect, useMemo } from 'react';

const App = () => {
  const [data, setData] = useState({
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    isModal: false,
    modalId: '',
    isButton: true,
  });

  const fetchImages = useCallback(() => {
    if(data.search.trim() !== ''){
      setData(prevData => ({ ...prevData, isLoading: true }));
      fetch(`https://pixabay.com/api/?q=${data.search}&page=${data.page}&key=44851747-335961d91f154475be80ef32b&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(newData => setData(prevData => ({ ...prevData, images: prevData.page === 1 ? newData.hits : [...prevData.images, ...newData.hits], isLoading: false, isButton: newData.hits.length === 12 }))).catch(error => console.error('Error fetching images:', error));
    }
    else{
      setData(prevData => ({ ...prevData, images: [], isLoading: false }));
    }
  }, [data.search, data.page]);

  const memoizedImages = useMemo(() => data.images, [data.images]);

  const handleKeyDown = useCallback((event) => {
    if(event.key === 'Escape') setData(prevData => ({ ...prevData, modalId: 0, isModal: false }));
    if(event.key === 'ArrowLeft') setData(prevData => ({ ...prevData, modalId: data.modalId > 0 ? data.modalId - 1 : data.images.length - 1 }));
    if(event.key === 'ArrowRight') setData(prevData => ({ ...prevData, modalId: data.modalId < data.images.length - 1 ? data.modalId + 1 : 0 }));
  }, [data.isModal, data.images.length]);

  useEffect(() => {
    if(data.page !== 1 && data.images.length > 0) window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  }, [data.page, data.images.length]);
  useEffect(() => {
    if(data.search !== undefined || data.page > 1) fetchImages();
  }, [data.search, data.page]);
  useEffect(() => {
    data.isModal ? window.addEventListener('keydown', handleKeyDown) : window.removeEventListener('keydown', handleKeyDown);
  }, [data.isModal, handleKeyDown]);

  return (
    <div className="App">
      <Searchbar func={(inpVal) => setData(prevData => ({ ...prevData, search: inpVal, page: 1 }))} />
      {data.isLoading ? <Loader /> : <>
        {memoizedImages.length !== 0 && <ImageGallery images={memoizedImages} openModal={(id) => setData(prevData => ({ ...prevData, modalId: memoizedImages.indexOf(memoizedImages.find(image => image.id === id)), isModal: true }))} />}
        {memoizedImages.length !== 0 && data.isButton && <Button loadMore={() => setData(prevData => ({ ...prevData, page: prevData.page + 1 }))} />}
      </>}
      {memoizedImages.length === 0 && <Notification />}
      {data.isModal && <Modal img={memoizedImages[data.modalId].largeImageURL} closeFunc={() => setData(prevData => ({ ...prevData, isModal: false }))} />}
    </div>
  );
}

export default App;