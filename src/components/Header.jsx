import React from 'react';

function Header(){
    return(
        <div className='header'>
           <span className='inlineheader'> 
                <img className='logobanner' src={process.env.PUBLIC_URL + '/images/banner.png'} alt="" />
                <span className='headerlinks'>
                    <ul className='something'>
                <li className='Search'>Search</li> &nbsp;
                <li className='Authentication'>Authentication</li> &nbsp;
                <li className='cities-link'><a href='/cities'>Cities</a></li>&nbsp;
                    </ul>
                </span>
            </span>
        </div>
    )
}

export default Header