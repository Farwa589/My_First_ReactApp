import React, { createContext, useContext , useState} from 'react'
import HomeNavbar from './navbar'
import Sidebar from './sidebar'
import './home.css'
import ThemeContext from './ThemeContext'

export default function Homescreen() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [inputTheme, setInputTheme] = useState("");
  const [createbutton, setCreateButton]=useState(false)

  const handleThemeChange = () => {
    
    const newTheme = inputTheme.trim().toLowerCase(); 
    if (newTheme === "light") {
      setTheme("Light Mode");
    } else if (newTheme === "dark") {
      setTheme("Dark Mode");
    } else {
      alert("Invalid theme! Type 'light' or 'dark'.");
    }
    setInputTheme(""); 
    console.log("changesssss")
  };

  return (
    <div>
      <HomeNavbar />
      <Sidebar />
      <div className='container'>
        <div className='main-content'>
          <h1 className='my-5'>Home Page</h1>
          <p>This is a home page</p>
          {/* <p>Current Theme: {theme}</p> */}

          
          <button
            onClick={handleThemeChange}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '20px',
              backgroundColor: theme === 'Dark Mode' ? '#555' : '#ddd',
              color: theme === 'Dark Mode' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Toggle Theme
          </button>

          
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Type 'light' or 'dark'"
              value={inputTheme}
              onChange={(e) => setInputTheme(e.target.value)}
              style={{
                padding: '10px',
                fontSize: '16px',
                marginRight: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <button
              onClick={handleThemeChange}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: theme === 'Dark Mode' ? '#555' : '#ddd',
                color: theme === 'Dark Mode' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Apply Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}