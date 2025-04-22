import React, { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
    function generateAllNewDice() {
        const diceNumbers = [];
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.ceil(Math.random() * 6);
            diceNumbers.push({
                id: i,
                value: randomNumber,
                isHeld: false,
            });
        }
        return diceNumbers;
    }

    const [dice, setDice] = useState(generateAllNewDice());

    function rollDice() {
        setDice((prevDice) =>
            prevDice.map((eachDie) => (eachDie.isHeld ? eachDie : { ...eachDie, value: Math.ceil(Math.random() * 6) }))
        );
    }

    function hold(id) {
        setDice((prevDice) =>
            prevDice.map((eachDie) => (eachDie.id === id ? { ...eachDie, isHeld: !eachDie.isHeld } : eachDie))
        );
    }
    return (
        <main className="flex fl-cntr">
            <div className="container grid">
                {dice.map((dieObject) => (
                    <Die
                        key={dieObject.id}
                        value={dieObject.value}
                        isHeld={dieObject.isHeld}
                        hold={() => hold(dieObject.id)}
                    />
                ))}
            </div>
            <button type="button" onClick={rollDice} className="roll-dice">
                Roll
            </button>
        </main>
    );
}

export default App;
