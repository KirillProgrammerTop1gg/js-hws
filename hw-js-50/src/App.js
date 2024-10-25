import './App.css';
import Phone from './Components/Phone/Phone';
import Feedback from './Components/Feedback/Feedback';

const App = () => {
  return (
    <div className="App">
      <Phone />
      <div style={{'width': '100%', 'height': '5px', 'backgroundColor': '#eba434'}}></div>
      <Feedback />
    </div>
  );
}

export default App;
