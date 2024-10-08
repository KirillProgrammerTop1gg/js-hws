import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import './ImageGallery.css';

export default ({images, openModal}) => 
<ul className="gallery-loadmore">
    {images.map(image => <ImageGalleryItem imgObj={image} key={image.id+1} openModalFunc={openModal} />)}
</ul>