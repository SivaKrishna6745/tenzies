import React, { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
    function generateAllNewDice() {
        const diceNumbers = [];
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            diceNumbers.push({ id: i, value: randomNumber, isHeld: false });
        }
        return diceNumbers;
    }

    const [dice, setDice] = useState(generateAllNewDice());

    function rollDice() {
        setDice((prevDice) => generateAllNewDice());
    }
    return (
        <>
            <main className="flex fl-cntr">
                <div className="container grid">
                    {dice.map((dieObject) => (
                        <Die key={dieObject.id} value={dieObject.value} isHeld={dieObject.isHeld} />
                    ))}
                </div>
                <button type="button" onClick={rollDice} className="roll-dice">
                    Roll
                </button>
            </main>
        </>
    );
}

export default App;
