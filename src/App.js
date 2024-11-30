import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './components/home';
import ThemeContext from './components/ThemeContext';
import { useState } from 'react';



function App() {

const [theme, setTheme] = useState("Light Mode");

const toggleTheme = () => {
  setTheme(theme === "Light Mode" ? "Dark Mode" : "Light Mode")
};
  


  return (

    <>
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}> 
      
    <Router>
      <Routes>
      <Route path="/" element={<Form />} />
      <Route path='/homescreen' element={<Homescreen />} />

      </Routes>

    </Router>
    </ThemeContext.Provider>
    </>

  );
}

export default App;

