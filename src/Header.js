import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Header() {
  let image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png";
  return (
    <div className='header'>
    
        <img  className= "header__icon"
        src= {image}
        alt="" />

        <div className='header__center'>
            <input type='text' />
            <SearchIcon/>
        </div>

        <div className='header__right'>
            <p> Become a Host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar/>
        </div>
    </div>
  )
}

export default Header