import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';  // Update the path if needed



export default function Nav() {
  const { isLoggedIn, handleLogout } = useAuth();  // Ensure you're using the correct context values

  return (
    <div>
           <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" />
            <h3>Learn with Tanim</h3>
          </Link>
        </li>
      </ul>
      <div className="account">
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <li className="mb-4 bg-violet-500 border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
  {isLoggedIn ? (
    <Link to="/login" onClick={handleLogout}>Logout</Link>
  ) : (
    <Link to="/Signup">Signup</Link>
  )}
</li>
      </div>
    </nav>
    </div>
  )
}
