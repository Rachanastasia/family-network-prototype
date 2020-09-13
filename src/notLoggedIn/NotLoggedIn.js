import React from 'react';
import './NotLoggedIn.css'
import { Link } from 'react-router-dom';

function NotLoggedIn() {
    return (
        <section className='home-page'>
            <div class='login'>

                <Link to={'/login'}>

                    <button className='main-button'>Log In</button>
                </Link> </div>
            <div>
                <p>To make a new network for a breast cancer patient, follow these steps</p>
                <Link to={'/new-account'}>

                    <button className='main-button'>New Network</button>
                </Link>  </div>


            <div>
                <p>If you have a patient network and want to add a new user, you can do that here.</p>
                <Link to={'/new-user'}>

                    <button className='main-button'>New User</button>
                </Link>     </div>




        </section>
    )
}

export default NotLoggedIn
