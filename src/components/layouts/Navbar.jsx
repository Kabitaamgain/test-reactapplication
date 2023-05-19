import React from 'react';
import {Link} from 'react-router-dom';
import "../../App.css"
const Navbar=()=>{
    return(
        <>
          <nav className="navbar">
            <div className='navbrand'>Brand</div>
            <ul className="navlist">
            <li className='navlink'>
              <Link 
              to='/'
              >
              Home
              </Link>
              </li>
            <li className='navlink'>
            <Link 
              to='/about'
              >
              AboutUs
              </Link>
              </li>
            <li className='navlink'>
            <Link 
              to='/contact'
              >
              Contact
              </Link>
              </li>
           </ul>
          </nav>
          </>
    );
};
export default Navbar;