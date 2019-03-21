import React from 'react';

const Buttons = (props) => { 
    return (
        <div className='buttons'>
            <button className='decrement-button' onClick={() => props.changeCard('down')}>Back</button>
            <button className='decrement-button' onClick={() => props.changeCard('up')}>Next</button>
        </div>
    )
}

export default Buttons