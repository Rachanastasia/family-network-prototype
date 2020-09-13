import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function AddContact() {
    return (
        <>
            <Link to={'/'}>
                <AiOutlineClose className='goBack' />
            </Link>
            <section>
                <h2>Add a new Contact</h2>
                <form>
                    <div className='row'>
                        <label htmlFor='network'>Network Key: </label>
                        <input className='user-form' type='text' name='network' placeholder='your support network key' />
                    </div>
                    <div className='row'>
                        <label htmlFor='email'>Password: </label>
                        <input className='user-form' type='text' name='email' placeholder='your email address' />
                    </div>
                    <div className='row'>
                        <label htmlFor='password'>Password: </label>
                        <input className='user-form' type='text' name='password' placeholder='create a password' />
                    </div>
                    <div className='row'>
                        <label htmlFor='rptpassword'>Repeat password: </label>
                        <input className='user-form' type='text' name='rptpassword' placeholder='same as password' />
                    </div>
                    <button type='submit'>Join Network</button>
                </form>
            </section>
        </>
    )
}

export default AddContact;
