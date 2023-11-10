import './App.css';
import Navbar from './componenet/Navbar';
import Carousel from './componenet/Carousel';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Carousel /> */}
        <Routes>
        <Route path="/" element={<Carousel/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
