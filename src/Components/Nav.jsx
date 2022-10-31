import React, { useState } from "react";
import "./Nav.css";
import logo from '../images/Fiber.png'
import { Link, NavLink } from "react-router-dom";

const Nav = ({searchUrl,setSearchUrl}) => {

  const [searchText ,setSearchText] = useState('')

 
  
  const searchRecipe = (e) => {
    if (e.key === 'Enter'){
     setSearchUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
     console.log(searchUrl)
    }
    
  }
 

  return(
    <Link style={{color: 'white', textDecoration: 'none'}} to='./discover'>
   <nav className="nav">
    <logo className='row logo'>
        <img src={logo} alt="logo" />
        <h1>Meal Cards</h1>
    </logo>
    <div className="actions">
        <input placeholder="Search for a meal..." type="search" onChange={(e) => setSearchText(e.target.value)} onKeyDown={searchRecipe} />
        <div className="nav-links">
            <NavLink to="/discover" >Discover</NavLink>
            <NavLink to="/mymeals">My Meals</NavLink>
        </div>
    </div>
  </nav>
  </Link>
  )
};

export default Nav;
