import React from 'react'

function DisplayContacts(props) {

    const newMap = props.name.map(contact => {
        return (
            <div><p>{contact.name}</p><p>{contact.phone}</p></div>)
    })
    console.log(newMap)
    return (
        <div className='contact-item'>
            <h1>HI</h1>
            {newMap}
        </div>

    )
}

export default DisplayContacts
