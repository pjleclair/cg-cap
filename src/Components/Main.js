import React from 'react';

export default function Main() {
    return(
        <main className='main--container'>
            <div className='main--title'>
                <h1 className='main--header'>Welcome to the Cool Guys Cap Table.</h1>
                <h3>We boast a variety of fine investments, such as...</h3>
            </div>
            <ul className='main--ul'>
                <li className='main--li'>Unregistered Securities</li>
                <li className='main--li'>Microstrategy</li>
                <li className='main--li'>Theranos</li>
                <li className='main--li'>Martin Shkreli's newest ponzi</li>
                <li className='main--li'>XRP</li>
            </ul>
        </main>
    )
}