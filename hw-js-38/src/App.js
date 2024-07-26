import './App.css';
import Greeting from './components/Greeting/Greeting';
import Message from './components/Message/Message';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Greeting name="Kirill" />
      <Message text="Hello, world!" />
      <Button onclick={() => console.log('Test')} />
    </>
  );
}

export default App;
