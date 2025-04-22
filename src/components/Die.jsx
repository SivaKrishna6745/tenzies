import React from 'react';

function Die({ value, isHeld, hold }) {
    return (
        <button
            type="button"
            className={`die ${isHeld ? 'held' : ''}`}
            aria-label={`Die with value of ${value}, ${isHeld ? 'held' : 'not held'}`}
            aria-pressed={isHeld}
            onClick={hold}
        >
            {value}
        </button>
    );
}

export default Die;
