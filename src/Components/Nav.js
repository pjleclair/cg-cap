import React from 'react';

export default function Nav() {
    return(
        <nav className='nav--logo'>
            <div className='nav--icon'>
                <img src={require('../garf.png')} className='garf' alt='cigarfield'></img>
                <h3>Cool Guys Capital</h3>
            </div>
            <h4 className='motto'>blamming™</h4>
        </nav>
    )
}