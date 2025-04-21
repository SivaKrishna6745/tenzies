import React from 'react';

function Die({ value, isHeld }) {
    return (
        <button type="button" className={`die ${isHeld ? 'held' : ''}`}>
            {value}
        </button>
    );
}

export default Die;
