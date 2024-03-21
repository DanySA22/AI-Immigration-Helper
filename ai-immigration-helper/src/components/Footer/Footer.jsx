import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 



function Footer () {
    return (
        <>
        <div className='disclaimer'> 
            <h3 className='disclaimer__header'>Disclaimer</h3>
            <p className='disclaimer__Text'> About the informational/educational propose of this website and the need
                to consult official government sources as well
            </p>
        </div>
        <div className='contact'> 
        <a href="https://www.linkedin.com/in/daniel-savignon-araujo-606194237/" target='_blank' className='contact__Link'> <p className='contact__icon'> LinkedIn Icon</p> </a>
        <a href="https://github.com/DanySA22" target='_blank' className='contact__Link'> <p className='contact__icon'> Github Icon</p>  </a>
        <a href="mailto:danielsavignon24@gmail.com" target='_blank' className='contact__Link'> <p className='contact__icon'> Gmail Icon</p> </a>
          
         
         
        </div>
        </>
    )
}


export default Footer;