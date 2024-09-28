import React,{useState} from 'react'
import './Explore.css'

function Explore() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  return (
    <div className="login-logout-container">
      {isLoggedIn ? (
        <button onClick={handleLogout} className="btn logout-btn">Logout</button>
      ) : (
        <button onClick={handleLogin} className="btn login-btn">Login</button>
      )}
    </div>
  )
}

export default Explore
