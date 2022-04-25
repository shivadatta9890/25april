
import './App.css';


import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"

import Home from './pages/home'
import About from './pages/about'
import Books from './pages/books'

import Login  from './pages/login'




function App() {
  return (
    <div className="App">
      
      <Navbar />
      {/* <Home />
      <About />
      <Books />
      <Login /> */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
