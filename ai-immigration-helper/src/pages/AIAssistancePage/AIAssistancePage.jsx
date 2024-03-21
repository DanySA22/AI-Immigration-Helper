import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 



function AiAssistance () {
    return (
        <>
        <div className='user-input'>
            <h3 className='user-input__header'> How can we help you with Immigration processes?</h3>
            <form action="" className='form'>
                <textarea className='form__Text' name="" id="" cols="30" rows="10"></textarea>
                <input className='form__file-Upload'type="file" />
                <input className='form__Submit'type="submit" />
            </form>
        </div>
        <div className='ai-output'>
            <h3 className='ai-output__header'> Artificial Intelligence Answer</h3>
            <form action="" className='ai-output-form'>
                <textarea name="" id="" cols="30" rows="10" className='ai-output-form__Text'></textarea>
                {/* The textarea value attribute could be holding a useState that will include the gpt output answer */}
                <input type="submit" className='ai-output-form__Submit'/>
            </form>
        </div>
        <div className='history'>
            <h3 className='history__header'>Your Saved Information</h3>
            <div className='history__request'>
            <button className='history__button'>See History</button>
            <button className='history__download'>Download Document</button>
            <input type="text"  placeholder='Search...' className='history__search'/>
            </div>
            <div className='history__Information'>
                <p className='history__Text'> This will contain the user Saved Information retrieve data </p>
            </div>
        </div>
        </>
    )
}


export default AiAssistance;