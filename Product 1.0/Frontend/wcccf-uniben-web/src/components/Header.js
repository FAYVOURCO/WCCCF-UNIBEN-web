import React from 'react'
import "./Header.css";
import Logo from '../logo.png';
import { Link} from 'react-router-dom';

function Header() {
  return (
    <div>
         <header>
           <div className='head1'>
              <div>
                <img src= {Logo} alt='wccrm logo'/>
              </div>
             
             <div className='name'>
              <p>WCCCF</p>
              <p>UNIBEN</p>
             </div>
           </div>

           <div className='head2'> 
            <Link to="/"><p>Home</p></Link>
            <Link to="media"><p>Media</p></Link>
            <Link to="aboutus"><p>About Us</p></Link>
            <Link to="contactus"><p>Contact Us</p></Link>
           </div>
           </header>
    </div>

  )
}

export default Header;