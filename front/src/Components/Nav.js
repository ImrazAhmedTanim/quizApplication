import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
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
        <a href="/Signup">Signup</a>
      </div>
    </nav>
    </div>
  )
}
