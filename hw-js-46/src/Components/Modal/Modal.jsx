import './Modal.css';

export default ({ img, closeFunc }) =>
<div className="overlay" onClick={e => closeFunc()}>
    <div className="modal">
        <img src={img} alt="Large Image" />
    </div>
</div>