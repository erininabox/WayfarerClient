import React from 'react';
// import logo from './logo.png';

function Header(){
    return(
        <div className='header'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
            <div className='Search'>Search</div>
            <div className='Authentication'>Authentication</div>
        </div>
    )
}

export default Header