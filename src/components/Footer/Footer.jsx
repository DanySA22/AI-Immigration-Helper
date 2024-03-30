import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer () {
    return (
        <>
        <div className='disclaimer'> 
            <h3 className='disclaimer__header'>Disclaimer</h3>
            <p className='disclaimer__Text'> 
            This website is designed for informational and educational purposes only. 
            The content provided here is intended to offer general information on the topics discussed and is not designed to provide specific advice or instructions. 
            The information provided on this website is not a substitute for professional advice or official guidelines established by government bodies or regulatory agencies. 
            </p>
        </div>
        <div className='contact'> 
        <a href="https://www.linkedin.com/in/daniel-savignon-araujo/" target='_blank' className='contact__Link' rel="noreferrer noopener"> <FontAwesomeIcon icon={faLinkedin} size="2x" className='contact__icon'/></a>
        <a href="https://github.com/DanySA22" target='_blank' className='contact__Link' rel="noreferrer noopener">  <FontAwesomeIcon icon={faGithub} size="2x" className='contact__icon'/> </a>
        <a href="mailto:danielsavignon24@gmail.com" target='_blank' className='contact__Link' rel="noreferrer noopener"> <FontAwesomeIcon icon={faEnvelope} size="2x" className='contact__icon'/></a>
                
        </div>
        </>
    )
}


export default Footer;