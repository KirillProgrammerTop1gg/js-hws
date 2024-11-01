import './Searchbar.css';

export default ({func}) => 
<header className="searchbar">
    <form className="form">
        {/* <button type="submit" className="button">
            <span className="button-label">Search</span>
        </button> */}
        <input
            onChange={(e) => func(e.target.value)}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
        />
    </form>
</header>