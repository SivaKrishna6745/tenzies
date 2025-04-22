import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Die from './components/Die';
import Confetti from 'react-confetti';

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

    const [dice, setDice] = useState(() => generateAllNewDice());
    const gameWon = dice.every((die) => die.isHeld) && dice.every((die) => die.value === dice[0].value);

    function rollDice() {
        if (gameWon) {
            setDice(() => generateAllNewDice());
        }
        setDice((prevDice) =>
            prevDice.map((eachDie) => (eachDie.isHeld ? eachDie : { ...eachDie, value: Math.ceil(Math.random() * 6) }))
        );
    }

    function hold(id) {
        setDice((prevDice) =>
            prevDice.map((eachDie) => (eachDie.id === id ? { ...eachDie, isHeld: !eachDie.isHeld } : eachDie))
        );
    }

    const buttonRef = useRef(null);
    useEffect(() => {
        buttonRef.current && buttonRef.current.focus();
    }, [gameWon]);

    return (
        <main className="flex fl-cntr">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="container grid">
                {gameWon && <Confetti />}
                <div aria-live="polite" className="sr-only">
                    {gameWon && <p>Congratulations! You've won! Press "New Game" to start again!</p>}
                </div>
                {dice.map((dieObject) => (
                    <Die
                        key={dieObject.id}
                        value={dieObject.value}
                        isHeld={dieObject.isHeld}
                        hold={() => hold(dieObject.id)}
                    />
                ))}
            </div>
            <button type="button" onClick={rollDice} className="roll-dice" ref={buttonRef}>
                {gameWon ? 'New Game' : 'Roll'}
            </button>
        </main>
    );
}

export default App;
