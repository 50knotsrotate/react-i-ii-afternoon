import React from 'react';

const Buttons = (props) => { 
    return (
        <div className='buttons'>
            <h2 className = 'navigate' onClick={() => props.changeCard('down')}>Previous</h2>
            <h2 className='navigate' onClick={() => props.changeCard('up')}>Next</h2>
        </div>
    )
}

export default Buttons