import './ImageGalleryItem.css';

export default ({ imgObj, openModalFunc }) =>
<li className="gallery-item" key={imgObj.id}>
    <button onClick={(e) => openModalFunc(imgObj.id)}>
        <img src={imgObj.webformatURL} alt={imgObj.alt} />
    </button>
</li>