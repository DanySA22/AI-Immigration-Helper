import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 



function EducationalPage() {
    return (
        <>
       <section className='best-practices'>
        <h3 className='best-practices__Header'>Canada Government Immigration Website Search Best Practices</h3>
        <div className='best-practices__Content'>
            <p className='best-practices__Text'> Description Parragraph 1</p>
            <p className='best-practices__Text'> Description Parragraph 2</p>
            <p className='best-practices__Text'> Description Parragraph 3</p>
        </div>
       </section>
       <section className='education'>
        <div className='education__subdivision'>
            <img src="" alt="" className='education__image'/>
        </div>
        <div className='education-links'>
            <h3 className='education-links__Header'>Educational Links</h3>
            <a className='education-links__Link'>Website Resource 1 </a>
            <a className='education-links__Link'>Website Resource 2 </a>
            <a className='education-links__Link'>Website Resource 3 </a>
            
        </div>
       </section>
       <section className='advisor'>
       <div className='advisor-links'>
            <h3 className='advisor-links__Header'>Immigration Advisor Links</h3>
            <a className='advisor-links__Link'>Website Resource 1 </a>
            <a className='advisor-links__Link'>Website Resource 2 </a>
            <a className='advisor-links__Link'>Website Resource 3 </a>
        </div>
        <div className='advisor__subdivision'>
            <img src="" alt="" className='advisor__image'/>
        </div>
       </section>
        </>
    )
}


export default EducationalPage;