import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className='header'>
           <span className='inlineheader'> 
                <img className='logobanner' src={process.env.PUBLIC_URL + '/images/banner.png'} alt="" />
                <span className='headerlinks'>
                    <ul className='something'>
                <li className='Search'>Search</li> &nbsp;
                <Link to='./signup'> Sign-Up </Link> &nbsp;
                <Link to='./login'> Login </Link> &nbsp;

                <li className='cities-link'><a href='/cities'>Cities</a></li>&nbsp;
                    </ul>
                </span>
            </span>
        </div>
    )
}

export default Header