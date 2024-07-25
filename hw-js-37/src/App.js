import './App.css';

const myName = 'Kirill';
const imgSrc = 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg';
const imgAlt = 'Pizza';
const myFavSite = {
  name: 'Youtube',
  url: 'https://youtube.com/',
}
const a = 10;
const b = 5;
const colors = ["Червоний", "Синій", "Зелений"];

function App() {
  return (
    <>
      <h1>Hi, {myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imgSrc} alt={imgAlt} width='300px' />
      <a href={myFavSite.url}>{myFavSite.name}</a>
      <p>Sum: {a + b}</p>
      <ul>
        {colors.map(color => (
          <li>{color}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
