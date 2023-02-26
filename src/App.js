import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Map from './components/Map';
import CreateAccount from './components/CreateAccount';
import Confirm from './components/Confirm';
import Start from './components/Start';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/map' element={<Map />}></Route>
        <Route path='/sign_in' element={<SignIn />}></Route>
        <Route path='/sign_up' element={<CreateAccount />}></Route>
        <Route path='/sign_up/confirm' element={<Confirm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
