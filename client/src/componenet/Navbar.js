import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItem,KEY_ACCESS_TOKEN } from '../utils/localStorageManager';
const accessToken=getItem(KEY_ACCESS_TOKEN);
const Navbar = () => {
 useEffect(()=>
 {

 },[accessToken]);
  return (
    <nav className="custom-navbar fixed-top">
      <div className="custom-navbar-container">
        <Link className="custom-navbar-brand" to="/" style={{position:'relative',right:'15px'}}>
          Blood_Bank Logo
        </Link>
        {!accessToken&&<div className="custom-navbar-buttons">
          <Link className="custom-btn custom-btn-info" to="/login" style={{position:'relative',right:'-276px'}}>
            Login
          </Link>
          <Link className="custom-btn custom-btn-warning" to="/signup" style={{position:'relative',right:'-276px'}}>
            Signup
          </Link>
        </div>}
        {accessToken&&<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" style={{position:'relative',right:'-284px',top:'-5px'}} aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>}
      </div>
      
    </nav>
  );
};
export default Navbar

