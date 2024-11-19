import './Home.css';
import React from 'react'
export default function Mission() {
    return (
        <div id='home-container'>
            <div id = 'home-img'>
                <img src='https://static.vecteezy.com/system/resources/previews/025/002/362/original/3d-astronaut-character-in-space-on-transparent-background-generative-ai-png.png' className='astronaut-img' alt='' />
            </div>
            <div id = 'home-heading' >
                <h1>VERSE-EX</h1>
                <h1>EXPLORE THE UNIVERSE</h1>
                <p>Verse-EX is a learning platform Here you can learn Cosmology and research <br/> We provide latest information about sapce</p>
                <button className='head-button'>Get Started</button>
                <strong className='keyword'>Verse-EX: Space Exploration</strong>
            </div>
        </div>
    );
}   