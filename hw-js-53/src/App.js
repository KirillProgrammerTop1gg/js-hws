import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contacts from './Components/Contacts/Contacts';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/js-hws/hw-js-53/build" element={<Main />} />
      <Route path="/js-hws/hw-js-53/build/login" element={<Login />} />
      <Route path="/js-hws/hw-js-53/build/register" element={<Register />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/js-hws/hw-js-53/build/contacts" element={<Contacts />} />
      </Route>
      <Route path="/" element={<Navigate to="/js-hws/hw-js-53/build" />} />
      <Route path="*" element={<Navigate to="/js-hws/hw-js-53/build" />} />
    </Routes>
  );
}

export default App;
