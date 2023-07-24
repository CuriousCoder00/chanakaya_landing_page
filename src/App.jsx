// import { useState } from 'react';

import Home from "./components/home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Courses from "./components/courses";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";

function App() {
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   if(theme === 'light'){
  //     setTheme('dark');
  //     document.body.style.backgroundColor = '#212529';
  //     document.body.style.color = '#fff';
  //   }else{
  //     setTheme('light');
  //     document.body.style.backgroundColor = 'rgb(239, 243, 243)';
  //     document.body.style.color = '#212529';
  //   }
  // }
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses/> } />
            <Route path="/gallery" element={<Gallery/> } />
            <Route path="/contact" element={<Contact/> } />
            <Route path="/dashboard" element={<Dashboard/> } />
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
