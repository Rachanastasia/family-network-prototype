import React from 'react'

function MedOverviewFilter(props) {

    return props.arr.map(med => <div className='row needsRefill'><h3>Needs Refill</h3><p>{med.name}</p><p>{med.contact}</p></div>

    )
}

export default MedOverviewFilter
