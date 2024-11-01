import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Navbar(props) {
 const [val, setVal] = useState(null);
  useEffect(() => {
    const navbarlink = document.querySelectorAll('.navbar-link');
    const loading = document.getElementById('loading-page');

    navbarlink.forEach((gotosrc) => {
      gotosrc.addEventListener('click', () => {
        loading.style.display = 'flex';
        setTimeout(() => {
          loading.style.display = 'none';
        }, 1000);
      });
    });
    
    return () => {
      navbarlink.forEach((gotosrc) => {
        gotosrc.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <nav className="nav-container">
        <input type="checkbox" id="checkbox-1" className="check-boxes" />

        <div className="site-title">
          <h1>
            Verse-<span>Ex</span>
          </h1>
          <p> Exploration of Universe</p>
        </div>
        <ul className="link-container">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="Objects" className="navbar-link">
              Objects
            </Link>
          </li>
          <li>
            <Link to="/Research" className="navbar-link">
              Research
            </Link>
          </li>
          <li>
            <Link to="/askus" className="navbar-link">
              Contact Us
            </Link>
          </li>
          <form className="search-cont" onSubmit={(ev) => {ev.preventDefault()}}>
            <input
              type="text"
              onChange={(eve) =>{setVal(eve.target.value)}}
              placeholder='Search'/>
            <Link to='/search'  className = 'navbar-link' id='search-btn' >
              <button className="fa fa-search" type='submit' style = {{color: 'white'}} onClick={() =>{props.setData(val)}} ></button>
            </Link>
          </form>
           <li>
               <a href='/' className='navbar-link'>
               Join Us </a>
           </li>
        </ul>

        <label for="checkbox-1" className="label-check" id="label-btn-1">
          &#9776;
        </label>
        <label for="checkbox-1" className="label-check" id="label-btn-2">
          &#10005;
        </label>
      </nav>
      <h1 className="just-space">-</h1>
      <div id="loading-page">
        <i className="fa fa-rocket" id="rocket-icon"></i>
        <div className="rocket-tail"></div>
        <span className="loading-title">Let's Fly</span>
        <div className="spinner-loading"></div>
      </div>
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   mode: PropTypes.string
// }
// this is how to define a proptype it can be anything like { number, string, boolean, null, object etc}

// Navbar.defaultProps = {
//   title: 'Set title here',
// link1: 'Set about',
// link2: 'Set Home'}
// to show the default prop use this
