import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Home from './components/Sign_in';
import Home from './components/Confirm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/map' element={<Home />}></Route>
        <Route path='/sign_in' element={<Sign_in />}></Route>
        <Route path='/sign_in/confirm' element={<Confirm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
