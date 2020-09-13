import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import './MakeAccount.css';
function MakeAccount(props) {

    //This componenet should not only be able to render this form, but it should redirect users to 
    //add doctors page and then to medications
    //or can skip and add later


    return (
        <>
            <Link to={'/'}>
                <AiOutlineClose className='goBack' />
            </Link>
            <section>
                <h2>Create a new Support Network</h2>
                <form>
                    <div className='row'>
                        <label htmlFor='networkName'>Network Name</label>
                        <input className='account-form' type='text' name='networkName' placeholder='your support network name' />
                    </div>
                    <div className='row'>
                        <label htmlFor='patient'>Patient</label>
                        <input className='account-form' type='text' name='patient' placeholder='patients name' />
                    </div>
                    <div className='row'>
                        <label htmlFor='patientEmail'>Patient's email</label>
                        <input className='account-form' type='text' name='patientEmail' placeholder='patients email address' />
                    </div>

                    <h3>If you are not the patient, create your own account below: </h3>

                    <div className='row'>
                        <label htmlFor='email'>Email: </label>
                        <input className='login-form' type='text' name='email' placeholder='email address' />
                    </div>
                    <div className='row'>
                        <label htmlFor='password'>Password: </label>
                        <input className='login-form' type='text' name='password' placeholder='password' />
                    </div>

                    <div className='row'>
                        <label htmlFor='rptpassword'>Repeat password: </label>
                        <input className='account-form' type='text' name='rptpassword' placeholder='same as password' />
                    </div>
                    <button type='submit'>Make Network</button>
                </form>
            </section>
        </>
    )
}

export default MakeAccount
