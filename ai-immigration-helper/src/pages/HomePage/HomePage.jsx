import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 



function HomePage () {
    return (
        <>
        <section className='hero'>
            <div className='hero__general-info'>
                <h1 className='hero__header'>AI-Immigration-Helper</h1>
                <p className='hero__Text'>Engaging short description</p>
            </div>
            <div className='hero__subdivision'>
                <img src="" alt="" className='hero__Image'/>
            </div>
        </section>
        <section className='about'>
            <h3 className='about__header'> About this website</h3>
            <div className='about__details'>
                <p className='about__Text'>What this app is about parragraph</p>
                <p className='about__Text'> How to use it parragraph</p>
            </div>
        </section>
        <section className='get-started'>
            <div className='get-started__subdivision'>
                <img src="" alt="" className='get-started__Image'/>
            </div>
            
            <button className='get-started__button'>Let's try it!</button>
            
        </section>
        </>
    )
}


export default HomePage;