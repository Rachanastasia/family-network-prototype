import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
function Login() {
    return (
        <>
            <Link to={'/'}>
                <AiOutlineClose className='goBack' />
            </Link>
            <section>
                <h2>Log In</h2>
                <form>
                    <div className='row'>
                        <label htmlFor='email'>Email: </label>
                        <input className='login-form' type='text' name='email' placeholder='email address' />
                    </div>
                    <div className='row'>
                        <label htmlFor='password'>Password: </label>
                        <input className='login-form' type='text' name='password' placeholder='password' />
                    </div>
                    <button type='submit'>Log in</button>
                </form>
            </section>
        </>
    )
}

export default Login
