import React, {useState} from 'react';

import './App.css';

import github from "./images/github.svg";
import chickenImg from "./images/chicken.png";
import dogImg from "./images/dog.png";
import pigImg from "./images/pig.png";
import sheepImg from "./images/sheep.png";
import resetImg from "./images/reset.png";
import frogImg from "./images/frog.png";

const chickenSound = require('./sound/chiken.mp3');
const dogSound = require('./sound/dog.mp3');
const pigSound = require('./sound/pig.mp3');
const sheepSound = require('./sound/sheep.mp3');
const frogSound = require('./sound/frog.mp3');

const animals = [
    {img: chickenImg, sound: new Audio(chickenSound), alt: 'chicken'},
    {img: dogImg, sound: new Audio(dogSound), alt: 'dog'},
    {img: pigImg, sound: new Audio(pigSound), alt: 'pig'},
    {img: sheepImg, sound: new Audio(sheepSound), alt: 'sheep'},
    {img: frogImg, sound: new Audio(frogSound), alt: 'frog'},
]

function App() {

    const [count, setCount] = useState(0);
    // const [time, setTime] = useState(0);
    const [animal, setAnimal] = useState(animals[0]);

    const reset = () => {
        setCount(0);
    }

    const stopAudio = audio => {
        // if (!audio.paused) return; //if audio don't play we won't stop it.

        audio.pause();
        const oldSrc = audio.src;
        audio.src='';
        audio.src=oldSrc;
    }

    return (
        <div className="App">

            <p className="counter">{count}</p>

            <div className="menu">
                <img
                    src={animal.img}
                    className='counter_button'
                    onClick={
                    () => {
                        setCount(count + 1)
                        stopAudio(animal.sound)
                        animal.sound.play();
                    }}
                    alt={animal.alt }
                />
            </div>
            <img src={resetImg} onClick={reset} className='reset_button' alt='reset'/>

            <div className='animal_list'>
                {animals.map(a =>
                    <img
                        key={a.img}
                        src={a.img}
                        className='animal_item'
                        onClick={() => setAnimal(a)}
                        alt={a.alt}
                    />
                )}
            </div>
            <div className="about"> Help people to stop using swear words </div>

            <div className="footer">
                <a className='git_link' href="https://github.com/SVladikO?tab=repositories" target="_blank">
                    <img src={github} className='github_icon' alt='github'/>
                </a>
            </div>
        </div>
    );
}

export default App;
