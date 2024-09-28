import './ImageGalleryItem.css';

export default ({ imgObj, openModalFunc }) =>
<li className="gallery-item" key={imgObj.id+Math.floor(Math.random() * 2000)}>
    <button onClick={(e) => openModalFunc(imgObj.largeImageURL)}>
        <img src={imgObj.webformatURL} alt={imgObj.alt} />
    </button>
</li>