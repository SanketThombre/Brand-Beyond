import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
