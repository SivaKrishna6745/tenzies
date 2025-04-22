import React from 'react';

function Die({ value, isHeld, hold }) {
    return (
        <button type="button" className={`die ${isHeld ? 'held' : ''}`} onClick={hold}>
            {value}
        </button>
    );
}

export default Die;
